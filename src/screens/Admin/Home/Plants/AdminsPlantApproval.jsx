import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

function AdminsPlantApproval(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
            <View style={styles.frame61}>
              <Text style={styles.sriLankanLeopard}>Sri Lankan Leopard</Text>
            </View>
        <Image
          source={require("../../../../assets/images/461931-landscape-samurai1.jpg")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <View style={styles.scrollArea1}>
          <ScrollView
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <View style={styles.rect1}>
              <Text style={styles.loremIpsum1}>
                The Leopard (Panthera pardus, Linnaeus, 1758) is the most
                secretive and elusive of the large carnivores, and also the
                shrewdest. Pound for pound, it is the strongest climber of the
                larger cats and is capable of killing prey far larger than
                itself. However, the leopard is the smallest member of the genus
                Panthera, which includes the Lion, Tiger and Jaguar.
                Historically, the leopard had a wide distribution across eastern
                and southern Asia and Africa, from Siberia to South Africa, with
                fragmented populations in the Indian subcontinent, Sri Lanka,
                Indochina, Malaysia, Indonesia and China. Sadly, the range has
                decreased radically due to over hunting and loss of
                habitat.After Linnaeus published his description of leopards
                in the Systema Naturae in 1758, as many as 27 subspecies of
                leopards were described within a period of 162 years (1794 to
                1956), by various scientists.
              </Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={[styles.containerbtn2, styles.materialButtonPrimary1]}>
            <Text style={styles.approve}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.containerbtn1, styles.materialButtonDanger1]}>
            <Text style={styles.decline}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:-11,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
  background: {
    position: "absolute",
    width: 414,
    backgroundColor: "transparent",
    borderColor: "transparent",
    top: 0,
    bottom: 0,
    left: 0
  },
  shriLankaPlatoSigiriiaSkalaLes1: {
    position: "absolute",
    top: 186,
    left: 33,
    height: 199,
    width: 351,
    backgroundColor: "transparent"
  },
  frame6: {
    position: "absolute",
    top: 84,
    left: 33,
    height: 64,
    width: 351,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      height: 27,
      width: 0
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  frame6ClippingMask: {
    position: "absolute",
    height: 64,
    width: 351,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  frame61: {
    position: "absolute",
    borderRadius: 25,
    top: 70,
    left: 33,
    height: 64,
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
    marginTop: 17,
    marginLeft: 23
  },
  frame6ClippingMaskStack: {
    width: 351,
    height: 64
  },
  image1: {
    top: 158,
    left: 32,
    width: 349,
    height: 237,
    position: "absolute",
    borderRadius: 38
  },
  scrollArea1: {
    top: 410,
    left: 27,
    width: 360,
    borderRadius: 25,
    height: 250,
    position: "absolute",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 90,
    shadowOpacity: 1,
    shadowRadius: 30,
    
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea1_contentContainerStyle: {
    height: 1102,
    borderRadius: 25,
    width: 340
  },
  rect1: {
    width: 350,
    height: 1002,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 27,
    borderRadius: 25,
    marginLeft: 17
  },
  loremIpsum1: {
    color: "#121212",
    height: 1044,
    width: 326,
    marginTop: 18,
    marginLeft: 18
  },
  materialButtonPrimary1: {
    height: 34,
    width: 111,
    position: "absolute",
    left: 83,
    top: 680,
    borderRadius: 15
  },
  materialButtonDanger1: {
    height: 34,
    width: 111,
    position: "absolute",
    left: 207,
    top: 680,
    borderRadius: 15
  },
  backgroundStack: {
    width: 414,
    flex: 1
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

export default AdminsPlantApproval;
