import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function ForestDetails({ navigation }) {
  const route = useRoute();
  const navigate = useNavigation();

  const [forest, setForest] = useState({});

  useEffect(() => {
    const data = {
      forestId: route.params.forestId,
      forestName: route.params.forestName,
      forestImage: route.params.forestImage,
      forestDetails: route.params.forestDetails,
    };
    setForest(data);
  }, []);

  console.log(forest.forestId);

  //Get all plants from the database
  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://life-on-land-backend.azurewebsites.net/api/forest/adminGetAllPlants/${forest.forestId}`
      )
      .then((res) => {
        setAllPlants(res.data.plants);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Get all Animals from the database
  const [allAnimals, setAllAnimals] = useState([]);

  console.log(allAnimals);

  useEffect(() => {
    axios
      .get(
        `https://life-on-land-backend.azurewebsites.net/api/forest/adminGetAllAnimals/${forest.forestId}`
      )
      .then((res) => {
        setAllAnimals(res.data.animals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);

  const handleClick1 = () => {
    setActive2(true);
    setActive3(true);
    setActive1(!active1);
  };

  const handleClick2 = () => {
    setActive1(true);
    setActive3(true);
    setActive2(!active2);
  };

  const handleClick3 = () => {
    setActive1(true);
    setActive2(true);
    setActive3(!active3);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View
          style={[styles.container1, styles.cupertinoSegmentWithThreeTabs4]}
        >
          <View style={styles.textWrapper}>
            <TouchableOpacity
              onPress={handleClick1}
              style={{
                backgroundColor: active1 ? "rgba(159,241,109,1)" : "white",
                flex: 1,
                alignItems: "center",
                padding: 8,
                height: 50,
                marginTop: -8,
                borderRadius: 26,
                shadowColor: active1 ? "rgba(159,241,109,1)" : "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 10,
              }}
            >
              <Text style={styles.details}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClick2}
              style={{
                backgroundColor: active2 ? "rgba(159,241,109,1)" : "white",
                flex: 1,
                alignItems: "center",
                padding: 8,
                height: 50,
                marginTop: -8,
                borderRadius: 26,
                shadowColor: active2 ? "rgba(159,241,109,1)" : "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 10,
              }}
            >
              <Text style={styles.plants}>Plants</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClick3}
              style={{
                backgroundColor: active3 ? "rgba(159,241,109,1)" : "white",
                flex: 1,
                alignItems: "center",
                padding: 8,
                height: 50,
                marginTop: -8,
                borderRadius: 26,
                shadowColor: active3 ? "rgba(159,241,109,1)" : "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 10,
              }}
            >
              <Text style={styles.animals}>Animals</Text>
            </TouchableOpacity>
          </View>
        </View>

        {active1 == false && (
          <View>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <Text style={styles.loremIpsum}>{forest.forestDetails}</Text>
              </ScrollView>
            </View>
            <Text style={styles.loremIpsum2}>{forest.forestName}</Text>
            <Image
              source={{ uri: forest.forestImage }}
              resizeMode="contain"
              style={styles.imagefrst}
            ></Image>
          </View>
        )}

        {active2 == false && (
          <View style={{ marginLeft: -9 }}>
            <View style={styles.scrollArea1}>
              <ScrollView
                contentContainerStyle={styles.scrollArea1_contentContainerStyle}
              >
                <View style={styles.group1Row}>
                  {allPlants
                    .filter((plant) => plant.adminStatus === "Approved")
                    .map((plant) => (
                      <TouchableOpacity
                        key={plant._id}
                        onPress={() =>
                          navigate.push("PlantsDetails", {
                            plantId: plant._id,
                            plantName: plant.name,
                            plantImage: plant.imageUrl,
                            plantDetails: plant.details,
                          })
                        }
                      >
                        <View style={styles.group1}>
                          <View style={styles.rect2}>
                            <Image
                              source={{ uri: plant.imageUrl }}
                              resizeMode="contain"
                              style={styles.image1}
                            ></Image>
                            <Text style={styles.kariPlants1}>{plant.name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                </View>
              </ScrollView>
            </View>
            <TouchableOpacity
              style={[styles.containerbtn, styles.materialButtonViolet7]}
              onPress={() =>
                navigate.push("AddPlantPage", {
                  forestId: forest.forestId,
                })
              }
            >
              <Text style={styles.addNewAnimals}>Add New Plant</Text>
            </TouchableOpacity>
          </View>
        )}

        {active3 == false && (
          <View style={{ marginLeft: -9 }}>
            <View style={styles.scrollArea1}>
              <ScrollView
                contentContainerStyle={styles.scrollArea1_contentContainerStyle}
              >
                <View style={styles.group1Row}>
                  {allAnimals
                    .filter((animal) => animal.adminStatus === "Approved")
                    .map((animal) => (
                      <TouchableOpacity
                        key={animal._id}
                        onPress={() =>
                          navigate.navigate("AnimalDetails", {
                            animalId: animal._id,
                            animalName: animal.name,
                            animalImage: animal.imageUrl,
                            animalDetails: animal.details,
                          })
                        }
                      >
                        <View style={styles.group1}>
                          <View style={styles.rect2}>
                            <Image
                              source={{ uri: animal.imageUrl }}
                              resizeMode="contain"
                              style={styles.image1}
                            ></Image>
                            <Text style={styles.kariPlants1}>
                              {animal.name}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                </View>
              </ScrollView>
            </View>
            <TouchableOpacity
              style={[styles.containerbtn, styles.materialButtonViolet7]}
              onPress={() =>
                navigate.push("AddAnimalPage", {
                  forestId: forest._id,
                })
              }
            >
              <Text style={styles.addNewAnimals}>Add New Animal Species</Text>
            </TouchableOpacity>
          </View>
        )}
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
    backgroundColor: "transparent",
    borderColor: "transparent",
    left: 0,
    top: 0,
  },
  cupertinoSegmentWithThreeTabs4: {
    height: 66,
    width: 375,
    position: "absolute",
    left: 21,
    top: 91,
    backgroundColor: "rgba(159,241,109,1)",
    borderRadius: 26,
  },
  scrollArea: {
    top: 469,
    left: 0,
    width: 414,
    height: 427,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea_contentContainerStyle: {
    height: 1959,
    width: 414,
  },
  loremIpsum: {
    color: "rgba(62,62,62,1)",
    height: 1944,
    width: "100%",
    fontSize: 18,
    marginTop: 15,
    padding: 25,
  },
  loremIpsum2: {
    fontWeight: "bold",
    top: 180,
    left: 25,
    position: "absolute",
    color: "#121212",
    fontSize: 20,
    letterSpacing: 2,
  },
  imagefrst: {
    top: 230,
    left: 48,
    width: 302,
    height: 203,
    position: "absolute",
    borderRadius: 38,
  },
  backgroundStack: {
    width: 414,
    height: 896,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginLeft: -12,
  },
  textWrapper: {
    height: 34,
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
  },
  segmentTextWrapper1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,1)",
    padding: 8,
    height: 50,
    marginTop: -8,
    borderRadius: 26,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  details: {
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(0,0,0,1)",
  },
  segmentTextWrapper2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(159,241,109,1)",
    padding: 6,
  },
  plants: {
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(0,0,0,1)",
  },
  segmentTextWrapper3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(159,241,109,1)",
    padding: 6,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  animals: {
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 18,
    color: "rgba(0,0,0,1)",
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
  addNewAnimals: {
    color: "#fff",
    fontSize: 16,
  },
  scrollArea1: {
    top: 212,
    left: 0,
    width: 415,
    height: 684,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea1_contentContainerStyle: {
    marginTop: -25,
    height: 685,
    width: 415,
  },
  group1: {
    width: 172,
    height: 260,
    margin: 3,
    marginTop: 10,
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
    marginTop: 32,
    textAlign: "center",
  },
  group2: {
    width: 172,
    height: 260,
    marginLeft: 13,
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
    marginLeft: 46,
  },
  group1Row: {
    height: 260,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 42,
    marginLeft: 29,
    marginRight: 29,
  },
  group3: {
    width: 172,
    height: 260,
    marginTop: 23,
    marginLeft: 29,
  },
  rect4: {
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
  materialButtonViolet7: {
    height: 39,
    width: 363,
    position: "absolute",
    left: 25,
    top: 169,
    borderRadius: 13,
    backgroundColor: "rgba(34,139,34,1)",
  },
  backgroundStack: {
    width: 415,
    height: 897,
  },
});

export default ForestDetails;
