import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

function AdminAnimalApprovalList({ navigation }) {
  const route = useRoute();

  const [forestId, setForestId] = useState({});

  useEffect(() => {
    const data = {
      forestId: route.params.forestId,
    };
    setForestId(data);
  }, [route.params.forestId]);

  //Get all Animals from the database
  const [pendingApproval, setPendingApproval] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://life-on-land-backend.azurewebsites.net/api/forest/adminGetAllAnimals/${forestId.forestId}`
      )
      .then((res) => {
        setPendingApproval(res.data.animals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [forestId.forestId]);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <Text style={styles.userPublishedPlants}>User Published Animals</Text>
        <View style={styles.scrollArea1}>
          <ScrollView
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <View style={styles.group1Row}>
              {pendingApproval
                .filter((animal) => animal.adminStatus === "Pending")
                .map((animal) => (
                  <TouchableOpacity
                    key={animal._id}
                    onPress={() =>
                      navigation.navigate("AdminsAnimalsApproval", {
                        animalId: animal._id,
                        animalName: animal.name,
                        animalImage: animal.imageUrl,
                        animalDetails: animal.details,
                      })
                    }
                  >
                    <View style={styles.group1}>
                      <View style={styles.rect1}>
                        <Image
                          source={{ uri: animal.imageUrl }}
                          resizeMode="contain"
                          style={styles.image1}
                        ></Image>
                        <Text style={styles.kariPlants2}>{animal.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
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
  iconPlus: {
    position: "absolute",
    top: 839,
    left: 206,
    height: 20,
    width: 21,
  },
  vector: {
    height: 20,
    width: 21,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  userPublishedPlants: {
    position: "absolute",
    top: 103,
    left: 36,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,0.86)",
    fontSize: 32,
  },
  scrollArea1: {
    top: 140,
    left: 0,
    width: 415,
    height: 701,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea1_contentContainerStyle: {
    marginLeft: -10,
    height: 701,
    width: 415,
  },
  group1: {
    width: 172,
    height: 260,
    margin: 10,
  },
  rect1: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25,
  },
  image1: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16,
  },
  kariPlants1: {
    color: "rgba(48,64,34,1)",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
    marginLeft: 46,
  },
  group2: {
    width: 172,
    height: 260,
    marginLeft: 13,
  },
  rect2: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25,
  },
  image2: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16,
  },
  kariPlants2: {
    color: "rgba(48,64,34,1)",
    fontSize: 16,
    marginTop: 32,
    textAlign: "center",
  },
  group1Row: {
    height: 260,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 175,
    justifyContent: "center",
  },
  group3: {
    width: 172,
    height: 260,
    marginTop: 23,
    marginLeft: 29,
  },
  rect3: {
    width: 172,
    height: 260,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25,
  },
  image3: {
    width: 140,
    height: 139,
    borderRadius: 25,
    marginTop: 13,
    marginLeft: 16,
  },
  kariPlants3: {
    color: "rgba(48,64,34,1)",
    fontSize: 16,
    marginTop: 32,
    marginLeft: 46,
  },
  backgroundStack: {
    backgroundColor: "rgba(255,255,255,1)",
    width: 415,
    height: 896,
  },
});

export default AdminAnimalApprovalList;
