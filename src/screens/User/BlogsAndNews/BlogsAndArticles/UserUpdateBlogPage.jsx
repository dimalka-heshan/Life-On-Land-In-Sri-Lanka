import { useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

function UserUpdateBlogPage(props) {
  const [blogTittle, setblogTitle] = useState("");
  const [blogContent, setblogContent] = useState("");
  const [image, setImage] = useState();
  const [savedImg, setSavedImg] = useState("");

  var route = useRoute();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //Add the image to the cloudinary in react native

  let CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/desnqqj6a/upload";
  const cloudinaryImage = async () => {
    if (image) {
      let data = new FormData();
      data.append("file", {
        uri: image,
        type: "image/jpeg",
        name: "testImage",
      });
      data.append("upload_preset", "GlobalEducation");
      data.append("cloud_name", "desnqqj6a");
      data.append("api_key", "143713375849926");
      data.append("api_secret", "6y1DW0yzKArCCQj8IWCZhv7FB5M");

      fetch(CLOUDINARY_URL, {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url);
          setSavedImg(data.url);

          //Post method to send image to backend
          UpdateBlog(data.url);
        })
        .catch((err) => {
          console.log(err);
          Alert.alert("Something went wrong");
        });
    } else {
      UpdateBlog(savedImg);
    }
  };

  const GetBlog = async () => {
    const { blogID } = route.params;
    await axios
      .get(
        `https://life-on-land-backend.azurewebsites.net/api/blog/getOneBlog/${blogID}`
      )
      .then((res) => {
        setblogTitle(res.data.blog.blogTittle);
        setblogContent(res.data.blog.blogContent);
        setSavedImg(res.data.blog.blogImage);
      });
  };

  //Update Blog
  const UpdateBlog = async (imgURL) => {
    const { blogID } = route.params;

    const data = {
      blogTittle: blogTittle,
      blogContent: blogContent,
      blogImage: imgURL,
    };

    await axios
      .patch(
        `https://life-on-land-backend.azurewebsites.net/api/blog/updateBlog/${blogID}`,
        data
      )
      .then((res) => {
        if (res.data.status) {
          Alert.alert("Suucess", "Blog Updated Successfully", [
            {
              text: "OK",
              onPress: () => props.navigation.push("BlogsPage"),
            },
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetBlog();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>
        <View style={styles.frame61}>
          <Text style={styles.pitcherPlantInSriLanka}>
            Update Blog or Article
          </Text>
        </View>
        <View style={[styles.containertxt, styles.materialUnderlineTextbox4]}>
          <TextInput
            placeholder="Enter Blog Title"
            style={styles.inputStyle}
            value={blogTittle}
            onChangeText={(text) => setblogTitle(text)}
          ></TextInput>
        </View>

        <View style={[styles.containertxt, styles.materialUnderlineTextbox5]}>
          <TextInput
            placeholder="Enter New Content"
            multiline={true}
            numberOfLines={10}
            style={styles.inputStyle1}
            value={blogContent}
            onChangeText={(text) => setblogContent(text)}
          ></TextInput>
        </View>

        <View style={[styles.containertxt, styles.materialUnderlineTextbox6]}>
          <TextInput
            value={image ? "Image Selected" : "Choose Image"}
            style={styles.inputStyle}
            editable={false}
            selectTextOnFocus={false}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={[styles.containerbtn, styles.materialButtonViolet1]}
          onPress={cloudinaryImage}
        >
          <Text style={styles.publish}>Update Blog Or Article</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage}>
          <Icon name="plus-circle" style={styles.icon1}></Icon>
        </TouchableOpacity>
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
    left: 23,
    top: 584,
    borderWidth: 2,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 63,
  },
  materialButtonViolet1: {
    height: 55,
    width: 364,
    position: "absolute",
    left: 20,
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
    fontWeight: "bold",
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
    fontSize: 16,
    alignSelf: "flex-start",
    flex: 1,
    textAlignVertical: "top",
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  frame61: {
    borderRadius: 26,
    position: "absolute",
    top: 0,
    left: -3,
    height: 60,
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
    marginTop: 16,
    marginLeft: 23,
  },
});

export default UserUpdateBlogPage;
