import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function AdminAddOrganizationPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.frame61}>
          <Text style={styles.sriLankanLeopard}>Register Organization</Text>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox17]}>
          <TextInput
            placeholder="Enter Organization Name"
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox24]}>
          <TextInput
            placeholder="Enter Organization Email"
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox25]}>
          <TextInput
            placeholder="Enter Organization Contact Number"
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox26]}>
          <TextInput
            placeholder="Enter Organization Country"
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox27]}>
          <TextInput
            placeholder="Enter Organization Description"
            multiline={true}
            numberOfLines={10}
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox28]}>
          <TextInput
            placeholder="Choose Organization Logo"
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <Icon name="plus-circle" style={styles.icon1}></Icon>
        <TouchableOpacity
          style={[styles.containerbtn, styles.materialButtonViolet18]}
        >
          <Text style={styles.addOrganization}>Add Organization</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -10,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
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
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  frame61: {
    position: "absolute",
    borderRadius: 25,
    top: 80,
    left: 33,
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
  addOrganization: {
    color: "#fff",
    fontSize: 18,
  },
  containertxt: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: -28,
    alignItems: "center",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    textAlignVertical: "top",
    marginLeft: 10,
    lineHeight: 16,
    paddingTop: 9,
    paddingBottom: 8,
  },
  background: {
    position: "absolute",
    height: 896,
    width: 414,
    backgroundColor: "transparent",
    borderColor: "transparent",
    left: 0,
    top: 0,
  },
  frame5: {
    position: "absolute",
    top: 86,
    left: 33,
    height: 64,
    width: 351,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      height: 27,
      width: 0,
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1,
  },
  frame5ClippingMask: {
    position: "absolute",
    height: 64,
    width: 351,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  frame51: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 64,
    width: 351,
  },
  registerOrganization: {
    height: 52,
    width: 308,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 16,
  },
  frame5ClippingMaskStack: {
    width: 351,
    height: 64,
  },
  materialUnderlineTextbox17: {
    height: 43,
    width: 360,
    position: "absolute",
    left: 27,
    top: 204,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 25,
  },
  materialUnderlineTextbox24: {
    height: 43,
    width: 360,
    position: "absolute",
    left: 28,
    top: 264,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 48,
  },
  materialUnderlineTextbox25: {
    height: 43,
    width: 360,
    position: "absolute",
    left: 28,
    top: 325,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 35,
  },
  materialUnderlineTextbox26: {
    height: 43,
    width: 360,
    position: "absolute",
    left: 28,
    top: 392,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 35,
  },
  materialUnderlineTextbox27: {
    height: 113,
    width: 353,
    position: "absolute",
    left: 33,
    top: 457,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
  },
  materialUnderlineTextbox28: {
    height: 50,
    width: 351,
    position: "absolute",
    left: 33,
    top: 597,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 100,
  },
  icon1: {
    top: 574,
    left: 340,
    position: "absolute",
    color: "rgba(34,139,34,1)",
    fontSize: 40,
  },
  materialButtonViolet18: {
    height: 60,
    width: 364,
    position: "absolute",
    left: 25,
    top: 645,
    backgroundColor: "rgba(65,117,5,1)",
    borderRadius: 31,
  },
  backgroundStack: {
    width: 414,
    height: 896,
  },
});

export default AdminAddOrganizationPage;
