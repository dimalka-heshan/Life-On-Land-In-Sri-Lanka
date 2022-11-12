import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <Text style={styles.forestsInSriLanka}>Forests in Sri Lanka</Text>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.groupRow}>
              <TouchableOpacity onPress={() => navigation.navigate('ForestDetails')}>
              <View style={styles.group}>
                <View style={styles.rect7}>
                  <Image
                    source={require("../../../../assets/images/4ss1.jpg")}
                    resizeMode="contain"
                    style={styles.image5}
                  ></Image>
                  <Text style={styles.kariPlants4}>Kari Plants</Text>
                </View>
              </View>
              </TouchableOpacity>
              <View style={styles.group1}>
                <View style={styles.rect8}>
                  <Image
                    source={require("../../../../assets/images/4ss1.jpg")}
                    resizeMode="contain"
                    style={styles.image6}
                  ></Image>
                  <Text style={styles.kariPlants5}>Kari Plants</Text>
                </View>
              </View>
            </View>
            <View style={styles.group2}>
              <View style={styles.rect9}>
                <Image
                  source={require("../../../../assets/images/4ss1.jpg")}
                  resizeMode="contain"
                  style={styles.image7}
                ></Image>
                <Text style={styles.kariPlants6}>Kari Plants</Text>
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
    left: 1,
    top: 0
  },
  forestsInSriLanka: {
    position: "absolute",
    top: 69,
    left: 57,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.86)",
    fontSize: 32,
  },
  scrollArea: {
    top: 132,
    left: 0,
    width: 415,
    height: 764,
    marginLeft: -8,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 764,
    width: 415
  },
  group: {
    width: 172,
    height: 260
  },
  rect7: {
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
  image5: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16
  },
  kariPlants4: {
        color: "rgba(48,64,34,1)",
    fontSize: 16,
    marginTop: 32,
    marginLeft: 46
  },
  group1: {
    width: 172,
    height: 260,
    marginLeft: 13
  },
  rect8: {
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
  image6: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16
  },
  kariPlants5: {
        color: "rgba(48,64,34,1)",
    fontSize: 16,
    marginTop: 32,
    marginLeft: 46
  },
  groupRow: {
    height: 260,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 29,
    marginRight: 29
  },
  group2: {
    width: 172,
    height: 260,
    marginTop: 23,
    marginLeft: 29
  },
  rect9: {
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
  image7: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16
  },
  kariPlants6: {
        color: "rgba(48,64,34,1)",
    fontSize: 16,
    marginTop: 32,
    marginLeft: 46
  },
  backgroundStack: {
    width: 415,
    height: 896,
    marginLeft: -1
  }
});

export default HomePage;
