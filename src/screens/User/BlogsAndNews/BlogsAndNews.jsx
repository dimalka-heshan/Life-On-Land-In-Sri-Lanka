import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

function BlogsAndNews({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BlogsPage')}>
      <Image
        source={require("../../../assets/images/1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('UserNews')}>
      <Image
        source={require("../../../assets/images/2.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:-10,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
  image: {
    width: 367,
    height: 284,
    borderRadius: 32,
    marginTop: 111,
    marginLeft: 23
  },
  image2: {
    width: 347,
    height: 264,
    borderRadius: 32,
    marginTop: 21,
    marginLeft: 32
  }
});

export default BlogsAndNews;
