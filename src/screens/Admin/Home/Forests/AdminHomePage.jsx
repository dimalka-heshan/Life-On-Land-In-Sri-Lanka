import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function AdminHomePage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <Text style={styles.forestsInSriLanka}>Forests in Sri Lanka</Text>
        <TouchableOpacity style={[styles.containerbtn, styles.materialButtonViolet2]} onPress={() => navigation.navigate('AddForestPage')}>
          <Text style={styles.caption}>Add new forest Details</Text>
        </TouchableOpacity>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.groupRow}>
              <TouchableOpacity onPress={() => navigation.navigate('AdminForestDetails')}>
              <View style={styles.group}>
                <View style={styles.rect}>
                  <Image
                    source={require("../../../../assets/images/4ss1.jpg")}
                    resizeMode="contain"
                    style={styles.image1}
                  ></Image>
                  <Text style={styles.floraPlant}>Flora plant</Text>
                  <View style={styles.iconRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateForest')}>
                    <FontAwesomeIcon
                      name="edit"
                      style={styles.icon}
                    ></FontAwesomeIcon>
                    </TouchableOpacity>
                    <MaterialCommunityIconsIcon
                      name="delete"
                      style={styles.icon2}
                    ></MaterialCommunityIconsIcon>
                  </View>
                </View>
              </View>
              </TouchableOpacity>
              <View style={styles.group1}>
                <View style={styles.rect1}>
                  <Image
                    source={require("../../../../assets/images/4ss1.jpg")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                  <Text style={styles.floraPlant1}>Flora plant</Text>
                  <View style={styles.icon3Row}>
                    <FontAwesomeIcon
                      name="edit"
                      style={styles.icon3}
                    ></FontAwesomeIcon>
                    <MaterialCommunityIconsIcon
                      name="delete"
                      style={styles.icon4}
                    ></MaterialCommunityIconsIcon>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
  background: {
    position: "absolute",
    height: 896,
    width: 414,
    backgroundColor: "transparent",
    borderColor: "transparent",
    left: 0,
    top: 0
  },
  forestsInSriLanka: {
    position: "absolute",
    top: 103,
    left: 65,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.86)",
    fontSize: 32,
  },
  materialButtonViolet2: {
    height: 36,
    width: 353,
    position: "absolute",
    left: 30,
    top: 178,
    backgroundColor: "rgba(34,139,34,1)",
    borderRadius: 9
  },
  scrollArea: {
    top: 225,
    left: 0,
    width: 414,
    height: 671,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 671,
    width: 414,
    flexDirection: "row"
  },
  group: {
    width: 172,
    height: 260
  },
  rect: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    borderRadius: 25
  },
  image1: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 12,
    marginLeft: 16
  },
  floraPlant: {
    color: "rgba(48,64,34,1)",
    height: 43,
    width: 140,
    textAlign: "center",
    marginTop: 13,
    marginLeft: 16
  },
  icon: {
    color: "rgba(65,117,5,1)",
    fontSize: 27,
    height: 27,
    width: 27,
    marginTop: 2
  },
  icon2: {
    color: "rgba(208,2,27,1)",
    fontSize: 27,
    height: 29,
    width: 27,
    marginLeft: 38
  },
  iconRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 39,
    marginRight: 41
  },
  group1: {
    width: 172,
    height: 260,
    marginLeft: 11
  },
  rect1: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    borderRadius: 25
  },
  image2: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 12,
    marginLeft: 16
  },
  floraPlant1: {
    color: "rgba(48,64,34,1)",
    height: 43,
    width: 140,
    textAlign: "center",
    marginTop: 13,
    marginLeft: 16
  },
  icon3: {
    color: "rgba(65,117,5,1)",
    fontSize: 27,
    height: 27,
    width: 27,
    marginTop: 2
  },
  icon4: {
    color: "rgba(208,2,27,1)",
    fontSize: 27,
    height: 29,
    width: 27,
    marginLeft: 38
  },
  icon3Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 39,
    marginRight: 41
  },
  groupRow: {
    height: 260,
    flexDirection: "row",
    flex: 1,
    marginRight: 29,
    marginLeft: 30,
    marginTop: 22
  },
  backgroundStack: {
    backgroundColor: "white",
    marginLeft:-8,
    width: 414,
    height: 896
  },
  containerbtn: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 16
  }
});

export default AdminHomePage;
