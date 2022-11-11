import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Payment({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
      <View style={styles.frame61}>
              <Text style={styles.sriLankanLeopard}>Donations</Text>
        </View>
        <View style={styles.rect2}>
          <Text style={styles.paymentInfo}>Payment info</Text>
          <Text style={styles.fullName}>Full name</Text>
 
          <View style={[styles.container123, styles.materialUnderlineTextbox34]}>
            <TextInput
              placeholder="Alex smith"
              placeholderTextColor="rgba(0,0,0,1)"
              style={styles.inputStyle}
            ></TextInput>
          </View>
          <Text style={styles.creditCardNubmer}>Credit card Nubmer</Text>
          <View style={[styles.container111, styles.materialIconTextbox]}>
            <TextInput
              placeholder="1234 1546 8754 9658"
              style={styles.inputStyle111}
            ></TextInput>
            <Icon name="credit-card" style={styles.iconStyle111}></Icon>
          </View>
          <View style={styles.expDateRow}>
            <Text style={styles.expDate}>Exp Date</Text>
            <Text style={styles.cvv}>CVV</Text>
          </View>
          <View style={styles.materialUnderlineTextbox35Row}>

            <View style={[styles.container123, styles.materialUnderlineTextbox35]}>
            <TextInput
              placeholder="Alex smith"
              placeholderTextColor="rgba(0,0,0,1)"
              style={styles.inputStyle}
            ></TextInput>
          </View>

          <View style={[styles.container123, styles.materialUnderlineTextbox36]}>
            <TextInput
              placeholder="Alex smith"
              placeholderTextColor="rgba(0,0,0,1)"
              style={styles.inputStyle}
            ></TextInput>
          </View>
          </View>
          <Text style={styles.zipCode}>Zip Code</Text>

          <View style={[styles.container123, styles.materialUnderlineTextbox37]}>
            <TextInput
              placeholder="Alex smith"
              placeholderTextColor="rgba(0,0,0,1)"
              style={styles.inputStyle}
            ></TextInput>
          </View>
          
        <TouchableOpacity onPress={() => navigation.navigate('PaymentSuccessful')} style={[styles.containerbtn1, styles.materialButtonViolet20]}>
          <Text style={styles.confirmPayment}>Confirm Payment</Text>
        </TouchableOpacity>
        </View>
        <Image
          source={require("../../../assets/images/Mobile_payments-rafiki.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -11,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
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
  container111: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle111: {
    color: "#000",
    marginLeft: 20,
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8
  },
  iconStyle111: {
    color: "#616161",
    fontSize: 24,
    paddingLeft: 8
  },
  container123: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 16,
    marginLeft: 10,
    paddingBottom: 8
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
  confirmPayment: {
    color: "#fff",
    fontSize: 18
  },
  background: {
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  rect1: {
    top: 79,
    left: 32,
    width: 351,
    height: 72,
    position: "absolute",
    backgroundColor: "rgba(230,255,214,1)",
    borderRadius: 21
  },
  donation: {
    color: "#121212",
    fontSize: 19,
    marginTop: 24,
    marginLeft: 137
  },
  rect2: {
    top: 150,
    left: 21,
    width: 374,
    height:570,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    borderRadius: 22
  },
  paymentInfo: {
    color: "#121212",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 83,
    marginLeft: 129
  },
  fullName: {
    color: "#121212",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 25
  },
  materialUnderlineTextbox34: {
    height: 43,
    width: 315,
    borderRadius: 13,
    marginLeft: 25
  },
  creditCardNubmer: {
    color: "#121212",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 25
  },
  materialIconTextbox: {
    height: 43,
    width: 315,
    borderRadius: 13,
    marginTop: 10,
    marginLeft: 25
  },
  expDate: {
    color: "#121212",
    fontSize: 18
  },
  cvv: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 93
  },
  expDateRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 25,
    marginRight: 150
  },
  materialUnderlineTextbox35: {
    height: 43,
    width: 122,
    borderRadius: 13
  },
  materialUnderlineTextbox36: {
    height: 43,
    width: 122,
    borderRadius: 13,
    marginLeft: 42
  },
  materialUnderlineTextbox35Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
    marginRight: 63
  },
  zipCode: {
    color: "#121212",
    fontSize: 18,
    marginTop: 23,
    marginLeft: 25
  },
  materialUnderlineTextbox37: {
    height: 43,
    width: 315,

    borderRadius: 13,
    marginLeft: 24
  },
  materialButtonViolet20: {
    height: 45,
    width: 306,
    borderRadius: 13,
    marginTop: 20,
    marginLeft: 36
  },
  image: {
    top: 140,
    left: 112,
    width: 190,
    height: 100,
    position: "absolute"
  },
  backgroundStack: {
    flex: 1
  }
});

export default Payment;
