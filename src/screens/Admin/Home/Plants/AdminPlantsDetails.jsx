import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";

function AdminPlantsDetails(props) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
            <View style={styles.frame61}>
              <Text style={styles.pitcherPlantInSriLanka}>
                Pitcher Plant in Sri Lanka
              </Text>
            </View>
        <Image
          source={require("../../../../assets/images/461931-landscape-samurai1.jpg")}
          resizeMode="contain"
          style={styles.image}
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
    marginLeft: -10,
  },
  background: {
    position: "absolute",
    height: 896,
    width: 414,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  frame6: {
    borderRadius: 26,
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
    backgroundColor: "rgba(159,241,109,1)"
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
    borderRadius: 26,
    position: "absolute",
    top: 0,
    left: 0,
    height: 64,
    width: 351,
    marginTop:69,
    marginLeft:30,
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
    marginTop: 17,
    marginLeft: 23
  },
  frame6ClippingMaskStack: {
    width: 351,
    height: 64,
    backgroundColor:"rgba(159,241,109,1)"
  },
  image: {
    top: 158,
    left: 32,
    width: 349,
    height: 237,
    position: "absolute",
    borderRadius: 38
  },
  scrollArea1: {
    top: 404,
    left: 0,
    width: 414,
    height: 492,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea1_contentContainerStyle: {
    height: 1452,
    width: 414
  },
  rect1: {
    width: 365,
    height: 1425,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 90,
    shadowOpacity: 1,
    shadowRadius: 30,
    borderRadius: 25,
    marginTop: 27,
    marginLeft: 28
  },
  loremIpsum1: {
    color: "#121212",
    height: 1396,
    width: 326,
    marginTop: 18,
    marginLeft: 18
  },
  backgroundStack: {
    backgroundColor: "white",
    width: 414,
    height: 896
  }
});

export default AdminPlantsDetails;
