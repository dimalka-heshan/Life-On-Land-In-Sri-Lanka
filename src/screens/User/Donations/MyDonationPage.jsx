import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import axios from "axios";
function MyDonationPage(props) {
  const [donations, setDonations] = useState([]);

  const getUsersDonations = async () => {
    const token = await AsyncStorage.getItem("token");

    await axios
      .get(
        "https://life-on-land-backend.azurewebsites.net/api/payment/getAllUserPayments",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        if (res.data.status) {
          setDonations(res.data.payments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsersDonations();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.frame61}>
          <Text style={styles.sriLankanLeopard}>My Donations</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            {donations.map((donation, index) => (
              <View style={styles.group}>
                <View style={styles.rect}>
                  <Text style={styles.payment5}>payment {index + 1}</Text>
                  <View style={styles.preserveWildLifeColumnRow}>
                    <View style={styles.preserveWildLifeColumn}>
                      <Text style={styles.preserveWildLife}>
                        {donation.preference}
                      </Text>
                      <Text style={styles.loremIpsum}>{donation.note}</Text>
                    </View>
                    <IoniconsIcon
                      name="ios-checkmark-circle-outline"
                      style={styles.icon4}
                    ></IoniconsIcon>
                  </View>
                  <View style={styles.icon3Row}>
                    <IoniconsIcon
                      name="ios-radio-button-on"
                      style={styles.icon3}
                    ></IoniconsIcon>
                    <Text style={styles.loremIpsum2}>{donation.time}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -12,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
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
  background: {
    position: "absolute",
    height: 896,
    width: 414,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  frame7: {
    position: "absolute",
    top: 77,
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
  myDonations: {
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
  scrollArea: {
    top: 197,
    left: 0,
    width: 414,
    height: 699,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea_contentContainerStyle: {
    height: 699,
    width: 414,
  },
  group: {
    width: 375,
    height: 143,
    marginTop: -5,
    marginLeft: 20,
    marginBottom: 15,
  },
  rect: {
    width: 375,
    height: 143,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 26,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 90,
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  payment5: {
    color: "#121212",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    marginLeft: 0,
  },
  preserveWildLife: {
    color: "#121212",
    fontSize: 14,
    height: 29,
    width: 277,
  },
  loremIpsum: {
    color: "#121212",
    height: 47,
    width: 277,
    fontSize: 13,
    marginTop: 1,
  },
  preserveWildLifeColumn: {
    width: 295,
  },
  icon2: {
    color: "rgba(126,211,33,1)",
    fontSize: 62,
    height: 68,
    width: 50,
    marginLeft: 4,
    marginTop: 7,
  },
  preserveWildLifeColumnRow: {
    height: 77,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 22,
    marginRight: 22,
  },
  icon3: {
    color: "rgba(232,213,0,1)",
    fontSize: 17,
    height: 19,
    width: 18,
  },
  loremIpsum2: {
    color: "#121212",
    fontSize: 10,
    marginLeft: 2,
    marginTop: 3,
  },
  icon3Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 22,
    marginRight: 266,
  },
  group1: {
    width: 375,
    height: 143,
    marginTop: 23,
    marginLeft: 20,
  },
  rect1: {
    width: 375,
    height: 143,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 26,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 90,
    shadowOpacity: 1,
    shadowRadius: 30,
  },
  payment6: {
    color: "#121212",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    marginLeft: 135,
  },
  preserveWildLife1: {
    fontWeight: "normal",
    color: "#121212",
    height: 29,
    width: 277,
  },
  loremIpsum3: {
    color: "#121212",
    height: 47,
    width: 277,
    fontSize: 13,
    marginTop: 1,
  },
  preserveWildLife1Column: {
    width: 295,
  },
  icon4: {
    color: "rgba(126,211,33,1)",
    fontSize: 62,
    height: 68,
    width: 55,
    marginLeft: -13,
    marginTop: 7,
  },
  preserveWildLife1ColumnRow: {
    height: 77,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 22,
    marginRight: 22,
  },
  icon5: {
    color: "rgba(232,213,0,1)",
    fontSize: 17,
    height: 19,
    width: 18,
  },
  loremIpsum4: {
    color: "#121212",
    fontSize: 10,
    marginLeft: 2,
    marginTop: 3,
  },

  icon3Row: {
    height: 19,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 22,
    marginRight: 266,
  },
  backgroundStack: {
    backgroundColor: "white",
    width: 414,
    height: 896,
  },
});

export default MyDonationPage;
