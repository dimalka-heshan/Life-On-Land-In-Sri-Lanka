import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

function AnimalDetails(props) {
  const route = useRoute();

  const [animals, setAnimals] = useState({});

  useEffect(() => {
    const data = {
      animalId: route.params.animalId,
      animalName: route.params.animalName,
      animalImage: route.params.animalImage,
      animalDetails: route.params.animalDetails,
    };
    setAnimals(data);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.frame61}>
          <Text style={styles.pitcherPlantInSriLanka}>
            {animals.animalName}
          </Text>
        </View>
        <Image
          source={{ uri: animals.animalImage }}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <View style={styles.scrollArea1}>
          <ScrollView
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <View style={styles.rect1}>
              <Text style={styles.loremIpsum1}>{animals.animalDetails}</Text>
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
    borderColor: "transparent",
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
      width: 0,
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1,
    backgroundColor: "rgba(159,241,109,1)",
  },
  frame6ClippingMask: {
    position: "absolute",
    height: 64,
    width: 351,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  frame61: {
    borderRadius: 26,
    position: "absolute",
    top: 0,
    left: 0,
    height: 64,
    width: 351,
    marginTop: 69,
    marginLeft: 30,
    backgroundColor: "rgba(159,241,109,1)",
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
    marginLeft: 23,
  },
  frame6ClippingMaskStack: {
    width: 351,
    height: 64,
    backgroundColor: "rgba(159,241,109,1)",
  },
  image: {
    top: 158,
    left: 32,
    width: 349,
    height: 237,
    position: "absolute",
    borderRadius: 38,
  },
  scrollArea1: {
    top: 404,
    left: 0,
    width: 414,
    height: 492,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea1_contentContainerStyle: {
    height: 1452,
    width: 414,
  },
  rect1: {
    width: 365,
    height: 1425,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 90,
    shadowOpacity: 1,
    shadowRadius: 30,
    borderRadius: 25,
    marginTop: 27,
    marginLeft: 28,
  },
  loremIpsum1: {
    color: "#121212",
    height: 1396,
    width: 326,
    marginTop: 18,
    marginLeft: 18,
  },
  backgroundStack: {
    width: 414,
    height: 896,
  },
});

export default AnimalDetails;
