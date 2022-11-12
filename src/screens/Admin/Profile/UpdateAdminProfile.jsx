import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


function UpdateAdminProfile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group2}>
        <View style={styles.group}>
        <View style={styles.frame61}>
              <Text style={styles.sriLankanLeopard}>Update Admin Profile</Text>
        </View>
          <View style={[styles.container222, styles.materialUnderlineTextbox28]}>
            <TextInput
              placeholder="Nimna Thiranjaya"
              style={styles.inputStyle}
            ></TextInput>
          </View>
          <View style={[styles.container222, styles.materialUnderlineTextbox29]}>
            <TextInput
              placeholder="Nimna Thiranjaya"
              style={styles.inputStyle}
            ></TextInput>
          </View>
          <View style={[styles.container222, styles.materialUnderlineTextbox30]}>
            <TextInput
              placeholder="Nimna Thiranjaya"
              style={styles.inputStyle}
            ></TextInput>
          </View>
          <View style={[styles.container222, styles.materialUnderlineTextbox311]}>
            <TextInput
              placeholder="Nimna Thiranjaya"
              multiline={true}
              numberOfLines={10}
              style={styles.inputStyle}
            ></TextInput>
          </View>
          <View style={[styles.container222, styles.materialUnderlineTextbox32]}>
            <TextInput
              placeholder="Enter Mobile Number"
              style={styles.inputStyle}
            ></TextInput>
          </View>
          <View style={styles.materialUnderlineTextbox33Stack}>
            <View style={[styles.container222, styles.materialUnderlineTextbox33]}>
            <TextInput
              placeholder="Choose Profile Picture"
              style={styles.inputStyle}
            ></TextInput>
          </View>
            <Icon name="plus-circle" style={styles.icon1}></Icon>
          </View>
          <TouchableOpacity style={[styles.container111, styles.materialButtonViolet1]}>
            <Text style={styles.update}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:-12,
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
  group2: {
    width: 415,
    height: 896,
    justifyContent: "center"
  },
  group: {
    width: 415,
    height: 896,
    alignSelf: "center"
  },
  rect1: {
    width: 351,
    height: 72,
    backgroundColor: "rgba(230,255,214,1)",
    marginTop: 79,
    marginLeft: 32
  },
  updateProfile: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 24,
    marginLeft: 112
  },
  materialUnderlineTextbox28: {
    height: 48,
    width: 360,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 29,
    marginTop: 180,
    marginLeft: 28
  },
  materialUnderlineTextbox29: {
    height: 48,
    width: 360,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 29,
    marginTop: 15,
    marginLeft: 28
  },
  materialUnderlineTextbox30: {
    height: 48,
    width: 360,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 29,
    marginTop: 15,
    marginLeft: 28
  },
  rect2: {
    width: 356,
    height: 169,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 26,
    marginTop: 19,
    marginLeft: 30
  },
  group3: {
    width: 325,
    height: 147,
    justifyContent: "center",
    marginTop: 11,
    marginLeft: 15
  },
  group4: {
    width: 325,
    height: 147,
    alignSelf: "center"
  },
  group5: {
    width: 325,
    height: 147
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 147,
    width: 325,
    fontSize: 16,
    textAlign: "left"
  },
  materialUnderlineTextbox32: {
    height: 48,
    width: 356,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 39,
    marginTop: 14,
    marginLeft: 28
  },
  materialUnderlineTextbox311: {
    height: 100,
    width: 356,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 25,
    marginTop: 14,
    marginLeft: 28
  },
  materialUnderlineTextbox33: {
    height: 50,
    width: 351,
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 100
  },
  icon1: {
    top: 5,
    left: 300,
    position: "absolute",
    color: "rgba(34,139,34,1)",
    fontSize: 40,
    height: 40,
    width: 34
  },
  materialUnderlineTextbox33Stack: {
    width: 351,
    height: 50,
    marginTop: 17,
    marginLeft: 30
  },
  materialButtonViolet1: {
    height: 60,
    width: 364,
    borderRadius: 91,
    backgroundColor: "rgba(34,139,34,1)",
    marginTop: 33,
    marginLeft: 27
  },
  container111: {
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
  update: {
    color: "#fff",
    fontSize: 18
  },
  container222: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    marginLeft: 10,
    fontSize: 16,
    textAlignVertical: "top",
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 11,
    paddingBottom: 8
  },
});

export default UpdateAdminProfile;
