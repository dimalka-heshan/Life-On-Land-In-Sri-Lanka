import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function AdminUpdatePlant(props) {
  const route = useRoute();
  const navigate = useNavigation();

  const [plantId, setPlantId] = useState({});

  useEffect(() => {
    const data = {
      plantId: route.params.plantId,
    };
    setPlantId(data);
  }, []);

  console.log(plantId);

  const [plantName, setPlantName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  //Get one plant details
  const getPlantDetails = async () => {
    await axios
      .get(
        `https://life-on-land-backend.azurewebsites.net/api/forest/getAnimalAndPlantsByID/${plantId.plantId}`
      )
      .then((res) => {
        setPlantName(res.data.animalAndPlants.name);
        setDescription(res.data.animalAndPlants.details);
        setImage(res.data.animalAndPlants.imageUrl);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    getPlantDetails();
  }, [plantId.plantId]);

  //Update animal
  const updatePlant = () => {
    const data = {
      name: plantName,
      details: description,
      imageUrl: image,
      type: "Plant",
    };
    axios
      .patch(
        `https://life-on-land-backend.azurewebsites.net/api/forest/updateAnimalPlans/${plantId.plantId}`,
        data
      )
      .then((res) => {
        Alert.alert("Success", "Plant updated successfully", [
          {
            text: "OK",
            onPress: () => navigate.push("AdminHomePage"),
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.frame61}>
          <Text style={styles.pitcherPlantInSriLanka}>Update Plant</Text>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox4]}>
          <TextInput
            placeholder="Plant Name"
            style={styles.inputStyle}
            value={plantName}
            onChangeText={(text) => setPlantName(text)}
          ></TextInput>
        </View>

        <View style={[styles.containertxt, styles.materialUnderlineTextbox5]}>
          <TextInput
            placeholder="Explanation of the Plant"
            value={description}
            onChangeText={(text) => setDescription(text)}
            multiline={true}
            numberOfLines={10}
            style={styles.inputStyle1}
          ></TextInput>
        </View>

        <View style={[styles.containertxt, styles.materialUnderlineTextbox6]}>
          <TextInput
            placeholder="Choose an image"
            value={image}
            onChangeText={(text) => setImage(text)}
            style={styles.inputStyle}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={[styles.containerbtn, styles.materialButtonViolet1]}
          onPress={() => updatePlant()}
        >
          <Text style={styles.publish}>Publish</Text>
        </TouchableOpacity>
        <Icon name="plus-circle" style={styles.icon1}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    marginLeft: -6.5,
    flex: 1,
  },
  background: {
    position: "absolute",
    backgroundColor: "transparent",
    borderColor: "transparent",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
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
  addANewAnimal: {
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
  materialUnderlineTextbox4: {
    height: 43,
    width: 360,
    position: "absolute",
    left: 24,
    top: 211,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 100,
  },
  materialUnderlineTextbox5: {
    height: 296,
    width: 364,
    position: "absolute",
    left: 21,
    top: 270,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 30,
  },
  materialUnderlineTextbox6: {
    height: 50,
    width: 360,
    position: "absolute",
    left: 27,
    top: 584,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 63,
  },
  materialButtonViolet1: {
    height: 60,
    width: 364,
    position: "absolute",
    left: 21,
    top: 690,
    backgroundColor: "rgba(34,139,34,1)",
    borderRadius: 100,
  },
  icon1: {
    top: 589,
    left: 334,
    position: "absolute",
    color: "rgba(34,139,34,1)",
    fontSize: 40,
    marginTop: -25,
  },
  backgroundStack: {
    backgroundColor: "white",
    flex: 1,
  },

  containerbtn: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    marginTop: -50,
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
  publish: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
  },
  containertxt: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    marginTop: -25,
    alignItems: "center",
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 20,
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 5,
    paddingBottom: 8,
  },
  inputStyle1: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 22,
    textAlignVertical: "top",
    fontSize: 16,
    alignSelf: "flex-start",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  frame61: {
    borderRadius: 26,
    position: "absolute",
    top: 0,
    left: 0,
    height: 64,
    width: 351,
    marginTop: 90,
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
});

export default AdminUpdatePlant;
