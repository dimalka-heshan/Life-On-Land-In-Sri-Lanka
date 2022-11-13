import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function AdminsPlantApproval(props) {
  const route = useRoute();
  const navigate = useNavigation();

  const [plantId, setplantId] = useState({});

  useEffect(() => {
    const data = {
      plantId: route.params.plantId,
      plantName: route.params.plantName,
      plantImage: route.params.plantImage,
      plantDetails: route.params.plantDetails,
    };
    setplantId(data);
  }, [route.params.plantId]);

  //Update animal status
  const updateAnimalStatus = () => {
    axios
      .patch(
        `https://life-on-land-backend.azurewebsites.net/api/forest/adminApprove/${plantId.plantId}`
      )
      .then((res) => {
        console.log(res.data);
        Alert.alert("Success", "Plant approved successfully", [
          {
            text: "OK",
            onPress: () => {
              navigate.push("AdminPlantsApprovalList");
            },
          },
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Reject animal status
  const rejectAnimalStatus = () => {
    axios
      .patch(
        `https://life-on-land-backend.azurewebsites.net/api/forest/adminReject/${plantId.plantId}`
      )
      .then((res) => {
        console.log(res.data);
        Alert.alert("Reject", "Plant rejected successfully", [
          {
            text: "OK",
            onPress: () => {
              navigate.push("AdminPlantsApprovalList");
            },
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
          <Text style={styles.sriLankanLeopard}>{plantId.plantName}</Text>
        </View>
        <Image
          source={{ uri: plantId.plantImage }}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <View style={styles.scrollArea1}>
          <ScrollView
            contentContainerStyle={styles.scrollArea1_contentContainerStyle}
          >
            <View style={styles.rect1}>
              <Text style={styles.loremIpsum1}>{plantId.plantDetails}</Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={() => updateAnimalStatus()}
          style={[styles.containerbtn2, styles.materialButtonPrimary1]}
        >
          <Text style={styles.approve}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => rejectAnimalStatus()}
          style={[styles.containerbtn1, styles.materialButtonDanger1]}
        >
          <Text style={styles.decline}>Decline</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -11,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
  },
  background: {
    position: "absolute",
    width: 414,
    backgroundColor: "transparent",
    borderColor: "transparent",
    top: 0,
    bottom: 0,
    left: 0,
  },
  shriLankaPlatoSigiriiaSkalaLes1: {
    position: "absolute",
    top: 186,
    left: 33,
    height: 199,
    width: 351,
    backgroundColor: "transparent",
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
      width: 0,
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
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
    position: "absolute",
    borderRadius: 25,
    top: 70,
    left: 33,
    height: 64,
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
    marginTop: 17,
    marginLeft: 23,
  },
  frame6ClippingMaskStack: {
    width: 351,
    height: 64,
  },
  image1: {
    top: 158,
    left: 32,
    width: 349,
    height: 237,
    position: "absolute",
    borderRadius: 38,
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
      height: 3,
    },
    elevation: 90,
    shadowOpacity: 1,
    shadowRadius: 30,

    backgroundColor: "rgba(255,255,255,1)",
  },
  scrollArea1_contentContainerStyle: {
    height: 1102,
    borderRadius: 25,
    width: 340,
  },
  rect1: {
    width: 350,
    height: 1002,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 27,
    borderRadius: 25,
    marginLeft: 17,
  },
  loremIpsum1: {
    color: "#121212",
    height: 1044,
    width: 326,
    marginTop: 18,
    marginLeft: 18,
  },
  materialButtonPrimary1: {
    height: 34,
    width: 111,
    position: "absolute",
    left: 83,
    top: 680,
    borderRadius: 15,
  },
  materialButtonDanger1: {
    height: 34,
    width: 111,
    position: "absolute",
    left: 207,
    top: 680,
    borderRadius: 15,
  },
  backgroundStack: {
    width: 414,
    flex: 1,
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
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  decline: {
    color: "#fff",
    fontSize: 14,
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
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  approve: {
    color: "#fff",
    fontSize: 14,
  },
});

export default AdminsPlantApproval;
