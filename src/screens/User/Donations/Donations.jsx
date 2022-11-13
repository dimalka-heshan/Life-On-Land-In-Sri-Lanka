import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Donations({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
      <Image
        source={require("../../../assets/images/image_2022-11-11_225246392-removebg-preview.png")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
        <Text style={styles.makeADonationConserveTheLifeOnLand}>
          Make a Donation {"\n"}Conserve the Life on Land
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddPreferencePage')} style={[styles.containerbtn1, styles.materialButtonViolet13]}>
          <Text style={styles.newDonation}>New Donation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyDonationPage')} style={[styles.containerbtn1, styles.materialButtonViolet14]}>
          <Text style={styles.newDonation}>My Donations</Text>
        </TouchableOpacity>
        <Icon name="arrow-circle-right" style={styles.icon}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
  image3: {
    marginTop: 100,
    marginLeft: -27,
    height: 250,
    width: 450,
  },
  containerbtn1: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: -150,
    marginLeft:-10,
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
  newDonation: {
    color: "#fff",
    fontSize: 19,
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
  donationMoneyVectorFlatIllustration1: {
    position: "absolute",
    top: 121,
    left: 5,
    height: 271,
    width: 401,
    backgroundColor: "transparent"
  },
  makeADonationConserveTheLifeOnLand: {
    position: "absolute",
    top: 380,
    left: 32,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.86)",
    fontSize: 28,
  },
  materialButtonViolet13: {
    height: 60,
    width: 364,
    position: "absolute",
    left: 26,
    top: 664,
    borderRadius: 55,
    backgroundColor: "rgba(65,117,5,1)"
  },
  materialButtonViolet14: {
    height: 60,
    width: 364,
    position: "absolute",
    left: 26,
    top: 742,
    borderRadius: 56,
    backgroundColor: "rgba(65,117,5,1)"
  },
  icon: {
    top: 519,
    left: 325,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 50
  },
  backgroundStack: {
    width: 414,
    height: 896
  }
});

export default Donations;
