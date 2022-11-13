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
import axios from "axios";
import Moment from "moment";

function AdminOrganization({ navigation }) {
  const [organization, setOrganization] = useState([]);

  const GetOrganization = async () => {
    await axios
      .get(
        "https://life-on-land-backend.azurewebsites.net/api/organization/adminGetAllOrgs"
      )
      .then((res) => {
        setOrganization(res.data.organizations);
      });
  };

  //Delete Organization
  const onDeletOrg = async (orgID) => {
    Alert.alert("Delete Confirmation", "Are you sure you want to delete?", [
      {
        text: "Ok",
        onPress: async () => {
          await axios
            .delete(
              `https://life-on-land-backend.azurewebsites.net/api/organization/deleteOrg/${orgID}`
            )
            .then((res) => {
              Alert.alert("Succes", "Organization Deleted Successfully", [
                {
                  text: "Ok",
                  onPress: async () => navigation.push("AdminOrganization"),
                },
              ]);
            });
        },
      },
      {
        text: "Cancel",
      },
    ]);
  };

  //Approve Organization
  const onApproveOrg = async (orgID) => {
    Alert.alert("Approve Confirmation", "Are you sure you want to approve?", [
      {
        text: "Ok",
        onPress: async () => {
          await await axios
            .patch(
              `https://life-on-land-backend.azurewebsites.net/api/organization/adminApproveOrg/${orgID}`
            )
            .then((res) => {
              if (res.data.status) {
                Alert.alert("Success", "Organization Approved Successfully", [
                  {
                    text: "Ok",
                    onPress: async () => GetOrganization(),
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
        text: "Cancel",
      },
    ]);
  };

  //Reject Organization
  const onRejectOrg = async (orgID) => {
    Alert.alert(
      "Reject Confirmation",
      "Are you sure you want to reject this organization ?",
      [
        {
          text: "Ok",
          onPress: async () => {
            await axios
              .patch(
                `https://life-on-land-backend.azurewebsites.net/api/organization/adminRejectOrg/${orgID}`
              )
              .then((res) => {
                if (res.data.status) {
                  Alert.alert("Succes", "Organization Rejected Successfully", [
                    {
                      text: "Ok",
                      onPress: async () => GetOrganization(),
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
          text: "Cancel",
        },
      ]
    );
  };

  //Search Organization
  const searchOrganization = async (e) => {
    const searchKey = e;

    await axios
      .get(
        "https://life-on-land-backend.azurewebsites.net/api/organization/adminGetAllOrgs"
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
    setOrganization(result);
  };

  useEffect(() => {
    GetOrganization();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.group15}>
        <View style={styles.group13}>
          <View style={styles.backgroundStack}>
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
                {organization.map((org) => (
                  <View>
                    {org.adminStatus === "Pending" ? (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.push("AdminSpecificOrgPage", {
                            orgId: org._id,
                          })
                        }
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
                                  {org.orgName}
                                </Text>
                                <View style={styles.icon2Row}>
                                  <FontAwesomeIcon
                                    name="flag"
                                    style={styles.icon2}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka}>
                                    {org.orgCountry}
                                  </Text>
                                </View>
                                <View style={styles.icon3Row}>
                                  <FontAwesomeIcon
                                    name="phone"
                                    style={styles.icon3}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka1}>
                                    {org.orgContactNo}
                                  </Text>
                                </View>

                                {/* Me View ekata condition eka dapan */}
                                <View style={styles.materialButtonPrimary1Row}>
                                  <TouchableOpacity
                                    style={[
                                      styles.containerbtn1,
                                      styles.materialButtonPrimary1,
                                    ]}
                                    onPress={() => onApproveOrg(org._id)}
                                  >
                                    <Text style={styles.approve}>Approve</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity
                                    style={[
                                      styles.containerbtn2,
                                      styles.materialButtonDanger1,
                                    ]}
                                    onPress={() => onRejectOrg(org._id)}
                                  >
                                    <Text style={styles.decline}>Decline</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <TouchableOpacity
                                onPress={() => onDeletOrg(org._id)}
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

                {organization.map((org) => (
                  <View>
                    {org.adminStatus != "Pending" ? (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.push("AdminSpecificOrgPage", {
                            orgId: org._id,
                          })
                        }
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
                                  {org.orgName}
                                </Text>
                                <View style={styles.icon2Row}>
                                  <FontAwesomeIcon
                                    name="flag"
                                    style={styles.icon2}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka}>
                                    {org.orgCountry}
                                  </Text>
                                </View>
                                <View style={styles.icon3Row}>
                                  <FontAwesomeIcon
                                    name="phone"
                                    style={styles.icon3}
                                  ></FontAwesomeIcon>
                                  <Text style={styles.sriLanka1}>
                                    {org.orgContactNo}
                                  </Text>
                                </View>

                                {/* Me View ekata condition eka dapan */}
                                <View style={styles.loremIpsumRow1}>
                                  <IoniconsIcon
                                    name="ios-radio-button-on"
                                    style={styles.icon33}
                                  ></IoniconsIcon>
                                  <Text style={styles.loremIpsum1}>
                                    {Moment(org.createdAt).format("YYYY-MM-DD")}
                                  </Text>
                                  <MaterialCommunityIconsIcon
                                    name="checkbox-marked-circle"
                                    style={styles.icon91}
                                  ></MaterialCommunityIconsIcon>
                                </View>
                              </View>
                              <TouchableOpacity
                                onPress={() => onDeletOrg(org._id)}
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
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 400,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
  },
  icon33: {
    color: "rgba(232,213,0,1)",
    fontSize: 17,
    height: 19,
    marginTop: 2,
    width: 18,
  },
  containerbtn1: {
    backgroundColor: "rgba(34,139,34,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  approve: {
    color: "#fff",
    fontSize: 12,
  },
  loremIpsum1: {
    color: "#121212",
    fontSize: 12,
    marginLeft: 10,
    marginTop: 3,
  },
  containerbtn2: {
    backgroundColor: "rgba(255,0,0,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  decline: {
    color: "#fff",
    fontSize: 14,
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
  loremIpsumRow1: {
    height: 33,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 2,
    marginRight: 9,
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
  icon91: {
    color: "rgba(126,211,33,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: -5,
    marginLeft: 50,
  },
  group16: {
    width: 377,
    height: 141,
    marginTop: 22,
    marginLeft: 18,
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
    marginTop: 4,
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
    fontSize: 28,
    height: 28,
    width: 24,
    marginTop: 1,
    marginLeft: 140,
  },
  environmantalColumn: {
    width: 175,
    marginLeft: 36,
    marginTop: -6,
    marginBottom: 3,
  },
  icon5: {
    color: "rgba(208,2,27,1)",
    fontSize: 28,
    height: 33,
    width: 25,
    marginLeft: 12,
    marginTop: 89,
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
    marginTop: 28,
    marginLeft: 18,
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
    borderRadius: 100,
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
  materialButtonPrimary1: {
    height: 23,
    width: 88,
    borderRadius: 15,
  },
  materialButtonDanger1: {
    height: 23,
    width: 88,
    borderRadius: 15,
    marginLeft: 7,
  },
  materialButtonPrimary1Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: -5,
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

export default AdminOrganization;
