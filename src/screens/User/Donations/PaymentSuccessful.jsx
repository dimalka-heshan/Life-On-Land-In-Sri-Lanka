import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";


function PaymentSuccessful({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.frame61}>
              <Text style={styles.sriLankanLeopard}>Donations</Text>
        </View>
      <View style={styles.paymentSuccessStackStack}>
        <View style={styles.paymentSuccessStack}>
          <Text style={styles.paymentSuccess}>Thank You!</Text>
          <Text style={styles.thankYou}>Payment Success</Text>
        </View>
        <Image
          source={require("../../../assets/images/Purchase_Success.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.materialButtonViolet21Stack}>
        <TouchableOpacity onPress={() => navigation.navigate('Donations')} style={[styles.container123, styles.materialButtonViolet22]}>
          <Text style={styles.done}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    frame61: {
        position: "absolute",
        borderRadius: 25,
        top: 80,
        left: 33,
        height: 55,
        width: 351,
        backgroundColor: "rgba(184,233,134,1)"
      },
      sriLankanLeopard: {
        fontWeight:"bold",
        height: 25,
        width: 305,
        backgroundColor: "transparent",
        textAlign: "center",
        color: "rgba(48,64,34,1)",
        fontSize: 20,
        marginTop: 13,
        marginLeft: 23
      },
  container123: {
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
  done: {
    color: "#fff",
    fontSize: 18
  },
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    marginLeft:-12,
    flex: 1
  },
  rect1: {
    width: 351,
    height: 72,
    backgroundColor: "rgba(230,255,214,1)",
    borderRadius: 21,
    marginTop: 79,
    marginLeft: 31
  },
  donation1: {
    color: "#121212",
    fontSize: 19,
    marginTop: 24,
    marginLeft: 137
  },
  paymentSuccess: {
    top: 55,
    left: 105,
    position: "absolute",
    color: "rgba(255,79,90,1)",
    fontSize: 21
  },
  thankYou: {
    top: 0,
    left: 8,
    position: "absolute",
    color: "rgba(255,79,90,1)",
    fontSize: 37,
    letterSpacing: 1
  },
  paymentSuccessStack: {
    top: 346,
    left: 40,
    width: 312,
    height: 93,
    position: "absolute"
  },
  image: {
    top: 40,
    left: 5,
    width: 392,
    height: 380,
    position: "absolute"
  },
  paymentSuccessStackStack: {
    width: 370,
    height: 439,
    marginTop: 100,
    marginLeft: 11
  },
  materialButtonViolet21: {
    height: 0,
    width: 100,
    position: "absolute",
    left: 68,
    top: 30
  },
  materialButtonViolet22: {
    height: 55,
    width: 220,
    position: "absolute",
    left: 23,
    top: 0,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 45
  },
  materialButtonViolet21Stack: {
    width: 257,
    height: 60,
    marginTop: 89,
    marginLeft: 78
  }
});

export default PaymentSuccessful;
