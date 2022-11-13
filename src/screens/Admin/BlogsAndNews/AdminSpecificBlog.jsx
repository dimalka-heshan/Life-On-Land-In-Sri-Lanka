import { useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function AdminSpecificBlog(props) {
  const [blog, setblog] = useState([]);
  var route = useRoute();
  const GetBlog = async () => {
    const { blogId } = route.params;
    console.log(blogId);
    await axios
      .get(
        `https://life-on-land-backend.azurewebsites.net/api/blog/getOneBlog/${blogId}`
      )
      .then((res) => {
        setblog(res.data.blog);
      });
  };

  useEffect(() => {
    GetBlog();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.frame61}>
          <Text style={styles.sriLankanLeopard}>Analyse Blog or Article</Text>
        </View>
        <Text style={styles.loremIpsum1502}>{blog.blogTittle}</Text>
        <Image
          source={{ uri: blog.blogImage }}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <Text style={styles.loremIpsum1504}>{blog.blogContent}</Text>
          </ScrollView>
        </View>
        {blog.adminStatus === "Pending" ? (
          <View style={styles.materialButtonPrimary1Row}>
            <TouchableOpacity
              style={[styles.containerbtn1, styles.materialButtonPrimary1]}
            >
              <Text style={styles.approve}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.containerbtn2, styles.materialButtonDanger1]}
            >
              <Text style={styles.decline}>Decline</Text>
            </TouchableOpacity>
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: -12,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
  },
  frame61: {
    position: "absolute",
    borderRadius: 25,
    top: -38,
    left: 31,
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
    backgroundColor: "transparent",
    borderColor: "transparent",
    left: 0,
    top: 0,
  },
  shriLankaPlatoSigiriiaSkalaLes1: {
    position: "absolute",
    top: 186,
    left: 33,
    height: 199,
    width: 351,
  },
  mask: {
    position: "absolute",
    height: 199,
    width: 351,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  patternFillEa7C615A5F9Ed03Ea9B14279A23F1C50E1585710: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 171,
    backgroundColor: "transparent",
    right: 0,
  },
  maskStack: {
    height: 199,
  },
  frame32: {
    position: "absolute",
    top: 44,
    left: 27,
    height: 67,
    width: 362,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      height: 27,
      width: 0,
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1,
  },
  frame33: {
    position: "absolute",
    height: 67,
    width: 362,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  frame34: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(186,244,148,1)",
    borderRadius: 31,
    right: 0,
    bottom: 0,
  },
  frame33Stack: {
    flex: 1,
  },
  loremIpsum1502: {
    top: 35,
    left: 45,
    position: "absolute",
    fontWeight: "bold",
    color: "#121212",
    height: 45,
    width: 327,
    textAlign: "center",
    fontSize: 18,
  },
  image1: {
    top: 90,
    left: 37,
    width: 345,
    height: 220,
    position: "absolute",
    borderRadius: 38,
  },
  scrollArea: {
    top: 330,
    left: 35,
    width: 349,
    height: 230,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 1,
    shadowRadius: 25,
    borderRadius: 38,
  },
  scrollArea_contentContainerStyle: {
    height: 400,
    width: 349,
  },
  loremIpsum1504: {
    color: "#121212",
    height: 380,
    width: 327,
    fontSize: 14,
    textAlign: "center",
    marginTop: 33,
    marginLeft: 10,
  },
  backgroundStack: {
    width: 414,
    height: 896,
  },
  materialButtonPrimary1: {
    height: 35,
    width: 88,
    borderRadius: 15,
  },
  materialButtonDanger1: {
    height: 35,
    width: 88,
    borderRadius: 15,
    marginLeft: 10,
  },
  materialButtonPrimary1Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 578,
    marginLeft: 115,
  },
  containerbtn1: {
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
    fontSize: 12,
  },
  containerbtn2: {
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
});

export default AdminSpecificBlog;
