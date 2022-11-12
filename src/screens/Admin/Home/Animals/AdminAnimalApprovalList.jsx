import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

function AdminAnimalApprovalList({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <Text style={styles.userPublishedPlants}>User Published Animals</Text>
        <View style={styles.scrollArea1}>
          <ScrollView
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <View style={styles.group1Row}>
            <TouchableOpacity onPress={() => navigation.navigate('AdminsAnimalsApproval')}>
              <View style={styles.group1}>
                <View style={styles.rect1}>
                  <Image
                    source={require("../../../../assets/images/4ss1.jpg")}
                    resizeMode="contain"
                    style={styles.image1}
                  ></Image>
                  <Text style={styles.kariPlants2}>Kari Plants</Text>
                </View>
              </View>
              </TouchableOpacity>
              <View style={styles.group2}>
                <View style={styles.rect2}>
                  <Image
                    source={require("../../../../assets/images/4ss1.jpg")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                  <Text style={styles.kariPlants2}>Kari Plants</Text>
                </View>
              </View>
            </View>
            <View style={styles.group3}>
              <View style={styles.rect3}>
                <Image
                  source={require("../../../../assets/images/4ss1.jpg")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
                <Text style={styles.kariPlants3}>Kari Plants</Text>
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
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  iconPlus: {
    position: "absolute",
    top: 839,
    left: 206,
    height: 20,
    width: 21
  },
  vector: {
    height: 20,
    width: 21,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  userPublishedPlants: {
    position: "absolute",
    top: 103,
    left: 36,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.86)",
    fontSize: 32,
  },
  scrollArea1: {
    top: 140,
    left: 0,
    width: 415,
    height: 701,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea1_contentContainerStyle: {
    marginLeft:-10,
    height: 701,
    width: 415
  },
  group1: {
    width: 172,
    height: 260
  },
  rect1: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25
  },
  image1: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16
  },
  kariPlants1: {
    color: "rgba(48,64,34,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
    marginLeft: 46
  },
  group2: {
    width: 172,
    height: 260,
    marginLeft: 13
  },
  rect2: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25
  },
  image2: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16
  },
  kariPlants2: {
    color: "rgba(48,64,34,1)",
    fontSize: 16,
    marginTop: 32,
    marginLeft: 46
  },
  group1Row: {
    height: 260,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 29,
    marginRight: 29
  },
  group3: {
    width: 172,
    height: 260,
    marginTop: 23,
    marginLeft: 29
  },
  rect3: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25
  },
  image3: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16
  },
  kariPlants3: {
    color: "rgba(48,64,34,1)",
    fontSize: 16,
    marginTop: 32,
    marginLeft: 46
  },
  backgroundStack: {
    backgroundColor: "rgba(255,255,255,1)",
    width: 415,
    height: 896
  }
});

export default AdminAnimalApprovalList;
