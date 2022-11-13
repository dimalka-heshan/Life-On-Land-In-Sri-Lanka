import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function OrganizationPage({ navigation }) {
  const [organizations, setOrganizations] = useState([]);
  const [userID, setuserID] = useState("");

  const getUserID = async () => {
    const token = await AsyncStorage.getItem("token");

    await axios
      .get("https://life-on-land-backend.azurewebsites.net/api/user/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setuserID(res.data.user._id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrganizations = async () => {
    const token = await AsyncStorage.getItem("token");

    await axios
      .get(
        "https://life-on-land-backend.azurewebsites.net/api/organization/getAllApprovedOrgs",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (res.data.status) {
          setOrganizations(res.data.organizations);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Delete Organization
  const deleteOrganization = async (orgID) => {
    Alert.alert(
      "Delete Confirmation",
      "Are you sure you want to delete this organization?",
      [
        {
          text: "Yes",
          onPress: async () => {
            await axios
              .delete(
                `https://life-on-land-backend.azurewebsites.net/api/organization/deleteOrg/${orgID}`
              )
              .then((res) => {
                if (res.data.status) {
                  Alert.alert("Success", "Organization deleted successfully", [
                    {
                      text: "OK",
                      onPress: () => getOrganizations(),
                    },
                  ]);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  //Search Organization
  const searchOrganization = async (e) => {
    const searchKey = e;

    const token = await AsyncStorage.getItem("token");
    await axios
      .get(
        "https://life-on-land-backend.azurewebsites.net/api/organization/getAllApprovedOrgs",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        filterData(res.data.organizations, searchKey.toLowerCase());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterData = (organization, searchKey) => {
    const result = organization.filter((organizations) =>
      organizations.orgName.toLowerCase().includes(searchKey)
    );
    setOrganizations(result);
  };

  useEffect(() => {
    getOrganizations();
    getUserID();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.group15}>
        <View style={styles.group13}>
          <View style={styles.backgroundStack}>
            <EntypoIcon
              name="circle-with-plus"
              onPress={() => navigation.navigate("AddOrganizationPage")}
              style={styles.icon12}
            ></EntypoIcon>

            <View style={styles.frame61}>
              <Text style={styles.sriLankanLeopard}>Organizations</Text>
            </View>
            <View style={[styles.container123, styles.materialSearchBar]}>
              <View style={styles.rect11}>
                <View style={styles.inputStyleStack}>
                  <TextInput
                    placeholder="Search"
                    style={styles.inputStyle}
                    onChangeText={(e) => searchOrganization(e)}
                  ></TextInput>
                  <TouchableOpacity style={styles.rightIconButton}>
                    <MaterialCommunityIconsIcon
                      name="magnify"
                      style={styles.rightIcon}
                    ></MaterialCommunityIconsIcon>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                {/* <TouchableOpacity
                  onPress={() => navigation.navigate("SpecificOrgPage")}
                >
                  <View style={styles.group16}>
                    <View style={styles.rect}>
                      <View style={styles.image1Row}>
                        <Image
                          source={require("../../../assets/images/4ss1.jpg")}
                          resizeMode="contain"
                          style={styles.image1}
                        ></Image>
                        <View style={styles.environmantalColumn}>
                          <Text style={styles.environmantal}>
                            Environmantal Organization
                          </Text>
                          <View style={styles.icon2Row}>
                            <FontAwesomeIcon
                              name="flag"
                              style={styles.icon2}
                            ></FontAwesomeIcon>
                            <Text style={styles.sriLanka}>Sri lanka</Text>
                          </View>
                          <View style={styles.icon3Row}>
                            <FontAwesomeIcon
                              name="phone"
                              style={styles.icon3}
                            ></FontAwesomeIcon>
                            <Text style={styles.sriLanka1}>0795846235</Text>
                          </View>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate("UpdateOrganizationPage")
                            }
                          >
                            <FontAwesomeIcon
                              name="pencil"
                              style={styles.icon4}
                            ></FontAwesomeIcon>
                          </TouchableOpacity>
                        </View>
                        <IoniconsIcon
                          name="md-trash"
                          style={styles.icon5}
                        ></IoniconsIcon>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity> */}

                {organizations.map((organization) => (
                  <View>
                    {organization.createdUser == userID ? (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("SpecificOrgPage", {
                            orgID: organization._id,
                          })
                        }
                      >
                        <View style={styles.group16}>
                          <View style={styles.rect}>
                            <View style={styles.image1Row}>
                              <Image
                                source={{ uri: organization.orgLogo }}
                                resizeMode="contain"
                                style={styles.image1}
                              ></Image>
                              <View style={styles.environmantalColumn}>
                                <Text style={styles.environmantal}>
                                  {organization.orgName}
                                </Text>
                                <View style={styles.icon2Row}>
                                  <FontAwesomeIcon
                                    name="flag"
                                    style={styles.icon2}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka}>
                                    {organization.orgCountry}
                                  </Text>
                                </View>
                                <View style={styles.icon3Row}>
                                  <FontAwesomeIcon
                                    name="phone"
                                    style={styles.icon3}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka1}>
                                    {organization.orgContactNo}
                                  </Text>
                                  {organization.adminStatus == "Pending" ? (
                                    <View style={styles.statusContainer}>
                                      <Text style={styles.statusText}>
                                        Pending
                                      </Text>
                                    </View>
                                  ) : (
                                    ""
                                  )}
                                </View>

                                <TouchableOpacity
                                  onPress={() =>
                                    navigation.push("UpdateOrganizationPage", {
                                      orgID: organization._id,
                                    })
                                  }
                                >
                                  <FontAwesomeIcon
                                    name="pencil"
                                    style={styles.icon4}
                                  ></FontAwesomeIcon>
                                </TouchableOpacity>
                              </View>

                              <TouchableOpacity
                                onPress={() =>
                                  deleteOrganization(organization._id)
                                }
                              >
                                <IoniconsIcon
                                  name="md-trash"
                                  style={styles.icon5}
                                ></IoniconsIcon>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      ""
                    )}
                  </View>
                ))}

                {organizations.map((organization) => (
                  <View>
                    {organization.createdUser != userID ? (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate("SpecificOrgPage", {
                            orgID: organization._id,
                          })
                        }
                      >
                        <View style={styles.group17}>
                          <View style={styles.rect1}>
                            <View style={styles.image2Row}>
                              <Image
                                source={require("../../../assets/images/4ss1.jpg")}
                                resizeMode="contain"
                                style={styles.image2}
                              ></Image>
                              <View style={styles.environmantal1Column}>
                                <Text style={styles.environmantal1}>
                                  {organization.orgName}
                                </Text>
                                <View style={styles.icon6Row}>
                                  <FontAwesomeIcon
                                    name="flag"
                                    style={styles.icon6}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka2}>
                                    {organization.orgCountry}
                                  </Text>
                                </View>
                                <View style={styles.icon7Row}>
                                  <FontAwesomeIcon
                                    name="phone"
                                    style={styles.icon7}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka3}>
                                    {organization.orgContactNo}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      ""
                    )}
                  </View>
                ))}

                {/* <View style={styles.group17}>
                  <View style={styles.rect1}>
                    <View style={styles.image2Row}>
                      <Image
                        source={require("../../../assets/images/4ss1.jpg")}
                        resizeMode="contain"
                        style={styles.image2}
                      ></Image>
                      <View style={styles.environmantal1Column}>
                        <Text style={styles.environmantal1}>
                          Environmantal Organization
                        </Text>
                        <View style={styles.icon6Row}>
                          <FontAwesomeIcon
                            name="flag"
                            style={styles.icon6}
                          ></FontAwesomeIcon>
                          <Text style={styles.sriLanka2}>Sri lanka</Text>
                        </View>
                        <View style={styles.icon7Row}>
                          <FontAwesomeIcon
                            name="phone"
                            style={styles.icon7}
                          ></FontAwesomeIcon>
                          <Text style={styles.sriLanka3}>0795846235</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View> */}
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusText: {
    color: "white",
    fontWeight: "bold",
  },
  statusContainer: {
    position: "absolute",
    marginTop: 32,
    marginLeft: 0,
    backgroundColor: "orange",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 10,
  },
  container: {
    marginTop: 400,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  group15: {
    width: 414,
    height: 896,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    icon10: {
      color: "rgba(208,2,27,1)",
      fontSize: 35,
      height: 38,
      width: 22,
      marginLeft: 1,
      marginTop: 83,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    justifyContent: "center",
    alignSelf: "center",
  },
  group13: {
    width: 414,
    height: 896,
  },
  background: {
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  iconPlus: {
    position: "absolute",
    top: 839,
    left: 206,
    height: 20,
    width: 21,
  },
  vector: {
    height: 20,
    width: 21,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },

  scrollArea: {
    top: 113,
    left: 0,
    width: 414,
    height: 783,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea_contentContainerStyle: {
    height: 783,
    width: 414,
  },
  group16: {
    width: 377,
    height: 141,
    marginTop: 14,
    marginLeft: 18,
    marginBottom: 13,
  },
  rect: {
    width: 377,
    height: 155,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    borderRadius: 20,
  },
  image1: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  environmantal: {
    color: "#121212",
  },
  icon2: {
    color: "rgba(126,211,33,1)",
    fontSize: 20,
    height: 20,
    width: 20,
  },
  sriLanka: {
    color: "#121212",
    fontSize: 13,
    marginLeft: 8,
  },
  icon2Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 16,
    marginRight: 97,
  },
  icon3: {
    color: "rgba(126,211,33,1)",
    fontSize: 20,
    height: 20,
    width: 16,
  },
  sriLanka1: {
    color: "#121212",
    fontSize: 13,
    marginLeft: 10,
  },
  icon3Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 2,
    marginRight: 74,
  },
  icon4: {
    color: "rgba(126,211,33,1)",
    fontSize: 25,
    height: 28,
    width: 24,
    marginTop: 10,
    marginLeft: 150,
  },
  environmantalColumn: {
    width: 175,
    marginLeft: 36,
    marginTop: 2,
    marginBottom: 3,
  },
  icon5: {
    color: "rgba(208,2,27,1)",
    fontSize: 25,
    height: 33,
    width: 25,
    marginLeft: 5,
    marginTop: 95,
  },
  image1Row: {
    height: 120,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 15,
    marginRight: 27,
  },
  group17: {
    width: 377,
    height: 141,
    marginTop: 13,
    marginLeft: 18,
    marginBottom: 13,
  },
  rect1: {
    width: 377,
    height: 141,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    borderRadius: 20,
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  environmantal1: {
    color: "#121212",
  },
  icon6: {
    color: "rgba(126,211,33,1)",
    fontSize: 20,
    height: 20,
    width: 20,
  },
  sriLanka2: {
    color: "#121212",
    fontSize: 13,
    marginLeft: 8,
  },
  icon6Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 16,
    marginRight: 97,
  },
  icon7: {
    color: "rgba(126,211,33,1)",
    fontSize: 20,
    height: 20,
    width: 16,
  },
  sriLanka3: {
    color: "#121212",
    fontSize: 13,
    marginLeft: 10,
  },
  icon7Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 2,
    marginRight: 74,
  },
  icon8: {
    color: "rgba(126,211,33,1)",
    fontSize: 28,
    height: 28,
    width: 24,
    marginTop: 6,
    marginLeft: 135,
  },
  environmantal1Column: {
    width: 175,
    marginLeft: 36,
    marginTop: 2,
    marginBottom: 3,
  },
  icon9: {
    color: "rgba(208,2,27,1)",
    fontSize: 30,
    height: 33,
    width: 25,
    marginLeft: 5,
    marginTop: 87,
  },
  image2Row: {
    height: 120,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 15,
    marginRight: 27,
  },
  group18: {
    width: 377,
    height: 141,
    marginTop: 14,
    marginLeft: 18,
  },
  rect2: {
    width: 377,
    height: 141,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    borderRadius: 20,
  },
  image3: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  environmantal2: {
    color: "#121212",
  },
  icon10: {
    color: "rgba(126,211,33,1)",
    fontSize: 20,
    height: 20,
    width: 20,
  },
  sriLanka4: {
    color: "#121212",
    fontSize: 13,
    marginLeft: 8,
  },
  icon10Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 16,
    marginRight: 97,
  },
  icon11: {
    color: "rgba(126,211,33,1)",
    fontSize: 20,
    height: 20,
    width: 16,
  },
  sriLanka5: {
    color: "#121212",
    fontSize: 13,
    marginLeft: 10,
  },
  icon11Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 2,
    marginRight: 74,
  },
  icon12: {
    color: "#9FF16D",
    fontSize: 52,
    elevation: 10,
    height: 52,
    width: 52,
    marginTop: 550,
    zIndex: 999,
    marginLeft: 335,
  },
  icon1222: {
    color: "transparent",
    fontSize: 52,
    elevation: 10,
    height: 52,
    width: 52,
    marginTop: 550,
    zIndex: 999,
    marginLeft: 335,
  },
  environmantal2Column: {
    width: 175,
    marginLeft: 36,
    marginTop: 2,
    marginBottom: 3,
  },
  icon13: {
    color: "rgba(208,2,27,1)",
    fontSize: 30,
    height: 33,
    width: 19,
    marginLeft: 5,
    marginTop: 87,
  },
  image3Row: {
    height: 120,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 15,
    marginRight: 27,
  },
  backgroundStack: {
    flex: 1,
  },
  leftIconButton: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5,
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6,
  },

  container123: {
    backgroundColor: "rgba(96,166,18,1)",
    padding: 1,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    borderRadius: 25,
  },
  materialSearchBar: {
    height: 50,
    width: 375,
    position: "absolute",
    left: 20,
    top: 36,
    borderRadius: 25,
  },
  rect11: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 25,
    flex: 1,
    marginBottom: 2,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  inputStyleStack: {
    width: 290,
    height: 49,
    marginLeft: 21,
    borderRadius: 15,
    marginTop: 4,
  },
  inputStyle: {
    height: 43,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 257,
    lineHeight: 16,
    position: "absolute",
    left: 0,
    top: 0,
  },
  rightIconButton: {
    padding: 11,
    position: "absolute",
    top: -3,
    right: -49,
    alignItems: "center",
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 26,
    opacity: 0.6,
  },
  frame61: {
    position: "absolute",
    borderRadius: 25,
    top: -45,
    left: 31,
    height: 55,
    width: 351,
    backgroundColor: "rgba(184,233,134,1)",
  },
  sriLankanLeopard: {
    fontWeight: "bold",
    height: 25,
    width: 305,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(48,64,34,1)",
    fontSize: 20,
    marginTop: 13,
    marginLeft: 23,
  },
});

export default OrganizationPage;
