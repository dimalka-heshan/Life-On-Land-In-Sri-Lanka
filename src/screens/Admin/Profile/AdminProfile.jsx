import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function AdminProfile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <EntypoIcon name="mail" style={styles.icon}></EntypoIcon>
          <Text style={styles.nimnaThiranjaya3}>nimnathiranjaya@gmail.com</Text>
        </View>
        <View style={styles.icon2Row}>
          <FontAwesomeIcon
            name="shopping-bag"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            name="shopping-bag"
            style={styles.icon3}
          ></FontAwesomeIcon>
          <Text style={styles.enviromentalist}>Enviromentalist</Text>
        </View>
        <Text style={styles.loremIpsum}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s
        </Text>
        <View style={styles.materialButtonPrimary1Row}>
        <TouchableOpacity onPress={() => navigation.navigate('UpdateAdminProfile')} style={[styles.containerbtn2, styles.materialButtonPrimary1]}>
          <Text style={styles.approve}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerbtn1, styles.materialButtonDanger1]}>
          <Text style={styles.decline}>Delete</Text>
        </TouchableOpacity>
        </View>
      </View>

        <View style={styles.frame61}>
                <Image
                  source={require("../../../assets/images/4ss1.jpg")}
                  resizeMode="contain"
                  style={styles.image7}
                ></Image>
              <Text style={styles.pitcherPlantInSriLanka}>
                Nimna Thiranjaya
              </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:-6,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
  image7: {
    width: 140,
    height: 139,
    borderRadius: 100,
    borderColor: 'red',
    borderWidth: 4,
    borderStyle:'solid',
    borderColor:'red',
    marginTop: 40,
    marginLeft: 100
  },
  frame61: {
    borderRadius: 26,
    position: "absolute",
    top: -25,
    left: 0,
    height: 270,
    width: 351,
    marginTop:90,
    marginLeft:27,
    backgroundColor: "rgba(159,241,109,1)"
  },
  pitcherPlantInSriLanka: {
    borderRadius: 26,
    height: 25,
    width: 305,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(48,64,34,1)",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 23
  },
  rect: {
    width: 351,
    height: 350,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 150,
    shadowOpacity: 1,
    shadowRadius: 50,
    marginTop: 360,
    marginLeft: 27
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 38,
    height: 42,
    width: 38
  },
  nimnaThiranjaya3: {
    color: "#121212",
    fontSize: 16,
    marginLeft: 15,
    marginTop: 11
  },
  iconRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 27,
    marginRight: 68
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 1,
    height: 1,
    width: 1,
    marginTop: 18
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 38,
    height: 38,
    width: 38,
    marginLeft: 1
  },
  enviromentalist: {
    color: "#121212",
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9
  },
  icon2Row: {
    height: 38,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 25,
    marginRight: 161
  },
  loremIpsum: {
    color: "#121212",
    height: 99,
    width: 262,
    textAlign: "center",
    fontSize: 16,
    marginTop: 30,
    marginLeft: 46
  },
  materialButtonPrimary1: {
    height: 34,
    width: 111,
    borderRadius: 15
  },
  materialButtonDanger1: {
    height: 34,
    width: 111,
    borderRadius: 15,
    marginLeft: 5
  },
  materialButtonPrimary1Row: {
    height: 34,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 65,
    marginRight: 58
  },
  frame3: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 283,
    width: 351,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      height: 27,
      width: 0
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1
  },
  frame3ClippingMask: {
    position: "absolute",
    height: 283,
    width: 351,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  frame31: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 283,
    width: 351
  },
  istockphoto104641618612X6121: {
    height: 161,
    width: 154,
    marginTop: 43,
    marginLeft: 98
  },
  mask: {
    position: "absolute",
    height: 161,
    width: 154,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  istockphoto104641618612X61211: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 161,
    width: 154,
    backgroundColor: "transparent"
  },
  path: {
    height: 161,
    width: 154,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  maskStack: {
    width: 154,
    height: 161
  },
  frame3ClippingMaskStack: {
    width: 351,
    height: 283
  },
  nimnaThiranjaya: {
    position: "absolute",
    top: 228,
    left: 50,
    height: 23,
    width: 253,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(48,64,34,1)",
    fontSize: 18,
    fontFamily: "lexend-600"
  },
  frame3Stack: {
    width: 351,
    height: 283,
    marginTop: -760,
    marginLeft: 32
  },
  containerbtn1: {
    backgroundColor: "rgba(255,0,0,1)",
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
  decline: {
    color: "#fff",
    fontSize: 14
  },
  containerbtn2: {
    backgroundColor: "rgba(34,139,34,1)",
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
  approve: {
    color: "#fff",
    fontSize: 14
  }
});

export default AdminProfile;
