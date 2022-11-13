import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

function AddPreferencePage({ navigation }) {
  const [preference, setPreference] = useState("");
  const [notes, setNotes] = useState("");

  const addPreference = async () => {
    if (preference == "" || notes == "") {
      Alert.alert("Error", "Please fill all the fields", [
        {
          text: "Ok",
        },
      ]);
    } else {
      navigation.navigate("Payment", {
        preference: preference,
        notes: notes,
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.frame7}>
        <View style={styles.frame61}>
          <Text style={styles.sriLankanLeopard}>Donations</Text>
        </View>
      </View>
      <View style={[styles.containerttt, styles.materialUnderlineTextbox18]}>
        <TextInput
          placeholder="My Preferances"
          style={styles.inputStyle}
          onChangeText={(text) => setPreference(text)}
        ></TextInput>
      </View>
      <View style={[styles.containerttt, styles.materialUnderlineTextbox10]}>
        <TextInput
          placeholder="Notes"
          multiline={true}
          numberOfLines={10}
          style={styles.inputStyle1}
          onChangeText={(text) => setNotes(text)}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={addPreference}
        style={[styles.containerbtn, styles.materialButtonViolet15]}
      >
        <Text style={styles.proceedPayment}>Proceed Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    marginLeft: -11,
    flex: 1,
  },
  containerttt: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: -40,
    alignItems: "center",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    marginLeft: 15,
    lineHeight: 16,
    paddingTop: 5,
    paddingBottom: 8,
  },
  inputStyle1: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    textAlignVertical: "top",
    marginLeft: 15,
    lineHeight: 16,
    paddingTop: 10,
    paddingBottom: 8,
  },
  frame61: {
    position: "absolute",
    borderRadius: 25,
    top: 10,
    left: -3,
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
  frame7: {
    height: 64,
    width: 351,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      height: 27,
      width: 0,
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1,
    marginTop: 77,
    marginLeft: 33,
  },
  frame7ClippingMask: {
    position: "absolute",
    height: 64,
    width: 351,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  frame71: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 64,
    width: 351,
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
  proceedPayment: {
    color: "#fff",
    fontSize: 18,
  },

  donation: {
    height: 52,
    width: 308,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginTop: 22,
    marginLeft: 16,
  },
  frame7ClippingMaskStack: {
    width: 351,
    height: 64,
  },
  materialUnderlineTextbox18: {
    height: 43,
    width: 360,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 82,
    marginTop: 40,
    marginLeft: 27,
  },
  materialUnderlineTextbox10: {
    height: 300,
    width: 360,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 25,
    marginTop: 40,
    marginLeft: 27,
  },
  group: {
    width: 360,
    height: 331,
    marginTop: 25,
    marginLeft: 28,
  },
  rect2: {
    width: 360,
    height: 331,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
  },
  note: {
    color: "rgba(155,155,155,1)",
    height: 301,
    width: 351,
    fontSize: 16,
    marginTop: 17,
    marginLeft: 5,
  },
  materialButtonViolet15: {
    height: 60,
    width: 364,
    borderRadius: 35,
    backgroundColor: "rgba(65,117,5,1)",
    marginTop: 63,
    marginLeft: 26,
  },
});

export default AddPreferencePage;
