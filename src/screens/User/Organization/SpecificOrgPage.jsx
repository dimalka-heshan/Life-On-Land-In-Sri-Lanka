import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useRoute } from "@react-navigation/native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import axios from "axios";

function SpecificOrgPage(props) {
  const [organization, setorganization] = useState("");

  var route = useRoute();

  const GetOrganization = async () => {
    const { orgID } = route.params;

    await axios
      .get(
        `https://life-on-land-backend.azurewebsites.net/api/organization/getOneOrg/${orgID}`
      )
      .then((res) => {
        setorganization(res.data.organization);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetOrganization();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.rect1}>
          <View style={styles.icon1Row}>
            <EntypoIcon name="mail" style={styles.icon1}></EntypoIcon>
            <Text style={styles.nimnaThiranjaya1}>{organization.orgEmail}</Text>
          </View>
          <View style={styles.icon2Row}>
            <IoniconsIcon name="ios-call" style={styles.icon2}></IoniconsIcon>
            <Text style={styles.enviromentalist2}>
              {organization.orgContactNo}
            </Text>
          </View>
          <Text style={styles.loremIpsum1}>{organization.orgDescription}</Text>
        </View>
        <View style={styles.rect2}>
          <Image
            source={{ uri: organization.orgLogo }}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Text style={styles.orgnme}>{organization.orgName}</Text>
          <Text style={styles.orgnme1}>{organization.orgCountry}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: -9,
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
  iconEnvelope: {
    position: "absolute",
    top: 610,
    left: 66,
    height: 25,
    width: 30,
  },
  path: {
    height: 25,
    width: 30,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  rect1: {
    top: 350,
    left: 30,
    width: 351,
    height: 350,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 32,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 150,
    shadowOpacity: 1,
    shadowRadius: 50,
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 38,
    height: 42,
    width: 38,
  },
  nimnaThiranjaya1: {
    color: "#121212",
    fontSize: 18,
    width: 300,
    marginLeft: 60,
    marginTop: -35,
  },
  orgnme: {
    color: "#121212",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginLeft: 0,
    marginTop: 10,
  },
  orgnme1: {
    color: "#121212",
    fontSize: 15,
    textAlign: "center",
    marginLeft: 0,
    marginTop: 2,
  },
  icon1Row: {
    height: 42,
    marginTop: 27,
    marginLeft: 24,
    marginRight: 43,
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 43,
    width: 40,
  },
  enviromentalist2: {
    color: "#121212",
    fontSize: 18,
    marginLeft: 19,
    marginTop: 12,
  },
  icon2Row: {
    height: 43,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 28,
    marginRight: 171,
  },
  loremIpsum1: {
    color: "#121212",
    height: 142,
    width: 280,
    textAlign: "center",
    fontSize: 16,
    marginTop: 45,
    marginLeft: 36,
  },
  rect2: {
    top: 65,
    left: 33,
    borderRadius: 32,
    width: 351,
    shadowColor: "rgba(184,233,134,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 150,
    shadowOpacity: 1,
    shadowRadius: 50,
    height: 255,
    position: "absolute",
    backgroundColor: "rgba(230,255,214,1)",
  },
  image1: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 22,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#228B22",
    marginLeft: 100,
  },
  backgroundStack: {
    width: 414,
    height: 896,
  },
});

export default SpecificOrgPage;
