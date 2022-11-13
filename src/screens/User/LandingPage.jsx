import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Screenshot2-removebg-preview.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.loremIpsum}>Green Woods{"\n"}Sri Lanka</Text>
      <Text style={styles.loremIpsum3}>
        Anyone with a passion for nature, photography, and protection our plant
        can be a naturalist. The NatureSpots App enables nature lovers,
        biodiversity enthusiast, nature conservation activists and everyone else
        interested in wildlife and natural habitats to share animal, plant or
        fungi observations and habitat discoveries on their adventures.
      </Text>
      <View style={styles.materialButtonViolet25Stack}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.containerbtn1, styles.materialButtonViolet25]}>
            <Text style={styles.getStarted}>Get Started</Text>
        </TouchableOpacity>
        <Icon name="arrow-circle-right" style={styles.icon1}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:-10,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
  image: {
    width: 377,
    height: 341,
    marginTop: 50,
    marginLeft: 16
  },
  loremIpsum: {
    color: "#121212",
    height: 115,
    width: 377,
    fontSize: 45,
    marginTop: -20,
    textAlign: "center",
    marginLeft: 18
  },
  loremIpsum3: {
    color: "#121212",
    height: 154,
    width: 326,
    fontSize: 15,
    textAlign: "center",
    marginTop: 3,
    marginLeft: 44
  },
  materialButtonViolet25: {
    height: 60,
    width: 364,
    position: "absolute",
    left: 0,
    top: -20,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 37
  },
  icon1: {
    top: -16,
    left: 309,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 50
  },
  materialButtonViolet25Stack: {
    width: 364,
    height: 60,
    marginTop: 65,
    marginLeft: 25
  },
  containerbtn1: {
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
  getStarted: {
    color: "#fff",
    fontSize: 18,
  }
});

export default LandingPage;
