import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import axios from "axios";

function Registration({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();

    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all the fields!");
    } else if (password !== confirmPassword) {
      alert("Password does not match!");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters!");
    } else {
      try {
        const user = {
          fullName,
          email,
          password,
          role: "User",
        };
        axios
          .post(
            "https://life-on-land-backend.azurewebsites.net/api/user/register",
            user
          )
          .then((res) => {
            if (res.data.success) {
              alert("Registration Successful");
              navigation.navigate("Login");
            } else {
              alert(res.data.message);
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <TouchableOpacity onPress={() => navigation.navigate("AdminTabs")}>
          <Image
            source={require("../../assets/images/Screenshot1-removebg-preview.png")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
        </TouchableOpacity>

        <Text style={styles.letsSaveTheWorld}>Let’s Save the World</Text>
        <Text
          style={styles.registerFromHereAndLetsSaveAndExploreTheWorldTogether}
        >
          Register from here and let’s save and explore the world together
        </Text>
        <Text style={styles.alreaadyHaveAnAccountSignIn}>
          Alreaady have an account ?
        </Text>

        <View style={[styles.containerbtn, styles.materialUnderlineTextbox1]}>
          <TextInput
            placeholder="Enter your Email"
            style={styles.inputStyle}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>

        <View style={[styles.containerbtn, styles.materialUnderlineTextbox2]}>
          <TextInput
            placeholder="Enter your Password"
            style={styles.inputStyle}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>

        <View style={[styles.containerbtn, styles.materialUnderlineTextbox20]}>
          <TextInput
            placeholder="Enter your Full Name"
            style={styles.inputStyle}
            onChangeText={(text) => setFullName(text)}
          ></TextInput>
        </View>

        <View style={[styles.containerbtn, styles.materialUnderlineTextbox21]}>
          <TextInput
            placeholder="Enter Confirm your Password"
            style={styles.inputStyle}
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={[styles.containertttt, styles.materialButtonViolet16]}
        >
          <Text style={styles.register} onPress={signup}>
            Register
          </Text>
        </TouchableOpacity>
        <View>
          <View>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.signUp}
            >
              Sign In
            </Text>
          </View>
        </View>
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
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
    right: 0,
  },
  button: {
    position: "absolute",
    top: 713,
    left: 26,
    height: 60,
    width: 364,
  },
  background1: {
    position: "absolute",
    height: 60,
    width: 364,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  getStarted: {
    position: "absolute",
    top: 15,
    left: 110,
    height: 30,
    width: 142,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
  },
  signUp: {
    color: "rgba(74,144,226,1)",
    marginTop: 475,
    fontWeight: "bold",
    marginLeft: 175,
  },
  signUp2: {
    color: "rgba(74,144,226,1)",
    marginTop: 470,
    fontWeight: "bold",
    marginLeft: 175,
  },
  background1Stack: {
    width: 364,
    height: 60,
  },
  letsSaveTheWorld: {
    position: "absolute",
    top: 267,
    left: 54,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.86)",
    fontSize: 32,
  },
  registerFromHereAndLetsSaveAndExploreTheWorldTogether: {
    position: "absolute",
    top: 330,
    left: 54,
    height: 66,
    width: 286,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
    fontSize: 14,
  },
  alreaadyHaveAnAccountSignIn: {
    position: "absolute",
    top: 735,
    left: 57,
    height: 56,
    width: 275,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.87)",
    fontSize: 14,
  },
  rectangle5: {
    position: "absolute",
    top: 58,
    left: 34,
    height: 187,
    width: 340,
    backgroundColor: "transparent",
  },
  materialUnderlineTextbox1: {
    height: 48,
    width: 360,
    position: "absolute",
    left: 31,
    top: 490,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
  },
  materialUnderlineTextbox2: {
    height: 48,
    width: 360,
    position: "absolute",
    left: 31,
    top: 556,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 67,
  },
  materialUnderlineTextbox20: {
    height: 48,
    width: 360,
    position: "absolute",
    left: 31,
    top: 425,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
  },
  materialUnderlineTextbox21: {
    height: 48,
    width: 360,
    position: "absolute",
    left: 31,
    top: 624,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 73,
  },
  materialButtonViolet16: {
    height: 60,
    width: 364,
    position: "absolute",
    left: 25,
    top: 722,
    borderRadius: 100,
    backgroundColor: "rgba(65,117,5,1)",
  },
  materialButtonViolet17: {
    height: 29,
    width: 97,
    position: "absolute",
    left: 231,
    top: 791,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  backgroundStack: {
    height: 896,
    marginTop: -1,
  },
  containerbtn: {
    marginTop: -28,
    borderBottomWidth: 1,
    marginLeft: -14,
    borderColor: "#D9D5DC",
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
    left: 13,
    lineHeight: 16,
    paddingTop: 7,
    paddingBottom: 8,
    textAlign: "left",
  },
  containertttt: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    marginTop: -55,
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
  register: {
    color: "#fff",
    fontSize: 16,
  },
  image3: {
    marginTop: 80,
    marginLeft: 1,
    height: 200,
    width: 400,
  },
});

export default Registration;
