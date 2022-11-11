import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all the fields!");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters!");
    } else {
      try {
        const user = {
          email,
          password,
        };
        axios
          .post(
            "https://life-on-land-backend.azurewebsites.net/api/user/login",
            user
          )
          .then((res) => {
            if (res.data.role === "Admin") {
              navigation.navigate("AdminHome");
            } else {
              navigation.navigate("MyTabs");
            }
            AsyncStorage.setItem("token", res.data.token);
            AsyncStorage.setItem("role", res.data.role);
          });
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <Image
          source={require("../../assets/images/Screenshot1-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Text style={styles.letsSaveTheWorld}>Let’s Save the World</Text>
        <Text style={styles.ifYoureAnExistingUserPleaseLoginToTheAppFromHere}>
          If you’re an existing user, Please login to the app from here!
        </Text>
        <Text style={styles.dontHaveAnAccountYetSignUp}>
          Don’t have an account yet ?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
        <View style={[styles.containertxt1, styles.materialUnderlineTextbox15]}>
          <TextInput
            placeholder="Enter your Email"
            style={styles.inputStyle}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>

        <View style={[styles.containertxt2, styles.materialUnderlineTextbox16]}>
          <TextInput
            placeholder="Enter your Password"
            onChangeText={(text) => setPassword(text)}
            style={styles.inputStyle}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity
          onPress={login}
          style={[styles.containerbtn, styles.materialButtonViolet12]}
        >
          <Text style={styles.logIn}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
  },
  background: {
    position: "absolute",
    height: 896,
    width: 414,
    top: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
    left: 0,
  },
  letsSaveTheWorld: {
    position: "absolute",
    top: 279,
    fontWeight: "bold",
    left: 50,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.86)",
    fontSize: 32,
  },
  signUp: {
    color: "rgba(74,144,226,1)",
    marginTop: 378,
    fontWeight: "bold",
    marginLeft: 170,
  },
  ifYoureAnExistingUserPleaseLoginToTheAppFromHere: {
    position: "absolute",
    top: 355,
    left: 50,
    height: 66,
    width: 286,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
    fontSize: 14,
  },
  dontHaveAnAccountYetSignUp: {
    position: "absolute",
    top: 657,
    left: 57,
    height: 56,
    width: 268,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
    fontSize: 14,
  },
  rectangle5: {
    position: "absolute",
    top: 57,
    left: 34,
    height: 187,
    width: 340,
    backgroundColor: "transparent",
  },
  rectangle32: {
    height: 187,
    width: 340,
    backgroundColor: "transparent",
  },
  materialUnderlineTextbox15: {
    height: 48,
    width: 360,
    position: "absolute",
    left: 26,
    top: 435,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
  },
  materialUnderlineTextbox16: {
    height: 45,
    width: 360,
    position: "absolute",
    left: 24,
    top: 495,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 67,
  },
  materialButtonViolet12: {
    height: 60,
    width: 364,
    position: "absolute",
    left: 24,
    top: 583,
    backgroundColor: "rgba(34,139,34,1)",
    borderRadius: 84,
  },
  backgroundStack: {
    width: 414,
    height: 896,
  },
  containerbtn: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    marginLeft: -10,
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
  logIn: {
    color: "#fff",
    fontSize: 18,
  },
  containertxt1: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    marginLeft: -9,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  containertxt2: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    marginLeft: -7,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    left: 18,
    paddingTop: 6,
    paddingBottom: 8,
    textAlign: "left",
  },
  image3: {
    marginTop: 100,
    marginLeft: -2,
    height: 200,
    width: 400,
  },
});

export default Login;
