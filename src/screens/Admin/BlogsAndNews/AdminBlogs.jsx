import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function AdminBlogs({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStack}>

              <View style={styles.frame61}>
                  <Text style={styles.sriLankanLeopard}>Analyse Blogs And Articles</Text>
                </View>
                <View style={[styles.container123, styles.materialSearchBar]}>
                  <View style={styles.rect11}>
                    <View style={styles.inputStyleStack}>
                      <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
                      <TouchableOpacity style={styles.rightIconButton}>
                        <MaterialCommunityIconsIcon
                          name="magnify"
                          style={styles.rightIcon}
                        ></MaterialCommunityIconsIcon>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.group}>
              <View style={styles.rect}>
                <Text style={styles.loremIpsum1}>
                  As wildlife diplomacy takes wing, government considers Sri
                  Lankan
                </Text>
                <Image
                  source={require("../../../assets/images/1bbb.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>


              {/* Me view eka accept nathi unge card eke phala view eka. Anith eka pahal. Me Kallata condition eka dpn */}
                <View>
                <View style={styles.image2Row}>
                  <Image
                    source={require("../../../assets/images/3e2.jpg")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                  <View style={styles.ravinduSandeepanaColumn}>
                    <Text style={styles.ravinduSandeepana}>
                      Ravindu Sandeepana
                    </Text>
                    <Text style={styles.loremIpsum3}>
                      Publish Date : 2022.06.23
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('AdminSpecificBlog')}>
                  <View style={styles.rect2}>
                    <Text style={styles.readMore}>Read more...</Text>
                  </View>
                  </TouchableOpacity>

                </View>
                <View style={styles.materialButtonPrimary1Row}>
                          <TouchableOpacity style={[styles.containerbtn1, styles.materialButtonPrimary1]}>
                            <Text style={styles.approve}>Approve</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.containerbtn2, styles.materialButtonDanger1]}>
                            <Text style={styles.decline}>Decline</Text>
                          </TouchableOpacity>
                    </View>
                </View>




              </View>
            </View>


            
            <View style={styles.group1}>
              <View style={styles.rect3}>
                <Text style={styles.loremIpsum4}>
                  As wildlife diplomacy takes wing, government considers Sri
                  Lankan
                </Text>
                <Image
                  source={require("../../../assets/images/1bbb.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>



              {/* Me view eka accept wena unge card eke pahalin*/}
                <View style={styles.image4Row}>
                  <Image
                    source={require("../../../assets/images/3e2.jpg")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                  <View style={styles.nimnaThiraColumn}>
                    <Text style={styles.nimnaThira}>Nimna Thira</Text>
                    <Text style={styles.loremIpsum5}>
                      Publish Date : 2022.06.23
                    </Text>
                    <MaterialCommunityIconsIcon
                        name="delete"
                        style={styles.icon41}
                  ></MaterialCommunityIconsIcon>
                  </View>
                  <View style={styles.rect4}>
                    <Text style={styles.readMore1}>Read more...</Text>
                  </View>
                </View>


              </View>
            </View>


          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft:-10,
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1
  },
  icon12: {
    color: "#9FF16D",
    fontSize: 52,
    elevation: 10,
    height: 52,
    width: 52,
    marginTop: 650,
    zIndex: 999,
    marginLeft: 340
  },
  background: {
    position: "absolute",
    height: 909,
    width: 414,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  frame1: {
    position: "absolute",
    top: 44,
    left: 27,
    height: 55,
    width: 362,
    shadowColor: "rgba(0,0,0,0.15)",
    shadowOffset: {
      height: 27,
      width: 0
    },
    shadowRadius: 70.56399536132812,
    shadowOpacity: 1
  },
  icon41: {
    color: "rgba(208,2,27,1)",
    fontSize: 28,
    height: 28,
    width: 30,
    marginTop: -27,
    marginLeft: 245
  },
  frame2: {
    position: "absolute",
    height: 55,
    width: 362,
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  frame3: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(186,244,148,1)",
    right: 0,
    bottom: 0
  },
  frame2Stack: {
    flex: 1
  },
  blogsAndArtices: {
    top: 60,
    left: 137,
    position: "absolute",
    color: "#121212",
    fontSize: 18
  },
  materialSearchBar1: {
    height: 56,
    width: 359,
    position: "absolute",
    top: 107,
    left: 30
  },
  scrollArea: {
    top: 194,
    left: 0,
    width: 414,
    height: 715,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 715,
    width: 414
  },
  group: {
    width: 347,
    height: 266,
    marginTop: 29,
    alignSelf: "center"
  },
  rect: {
    width: 347,
    height: 266,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    borderRadius: 22
  },
  loremIpsum1: {
    color: "rgba(48,64,34,1)",
    height: 49,
    width: 308,
    fontSize: 15,
    marginTop: 10,
    marginLeft: 19
  },
  image: {
    width: 312,
    height: 130,
    borderRadius: 22,
    marginTop:-6,

    marginLeft: 17
  },
  image2: {
    marginTop: -18,
    width: 33,
    height: 33,
    borderRadius: 100
  },
  ravinduSandeepana: {
    color: "rgba(48,64,34,1)",
    fontSize: 12
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 9
  },
  ravinduSandeepanaColumn: {
    width: 113,
    marginLeft: 6,
    marginTop: -17,
    marginBottom: 3
  },
  icon: {
    color: "rgba(126,211,33,1)",
    fontSize: 24,
    height: 24,
    width: 21,
    marginLeft: 59,
    marginTop: -17
  },
  rect2: {
    width: 75,
    height: 27,
    backgroundColor: "rgba(230,255,214,1)",
    borderWidth: 1,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 20,
    marginLeft: 80,
    marginTop: -17
  },
  readMore: {
    color: "#121212",
    fontSize: 10,
    marginTop: 5,
    marginLeft: 9
  },
  image2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 16,
    marginRight: 15
  },
  group1: {
    width: 347,
    height: 266,
    marginTop: 14,
    alignSelf: "center"
  },
  rect3: {
    width: 347,
    height: 266,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 45,
    shadowOpacity: 1,
    shadowRadius: 15,
    borderRadius: 22
  },
  materialButtonPrimary1: {
    height: 23,
    width: 84,
    borderRadius: 15,
    marginTop: 11,
    marginLeft: -85
  },
  materialButtonDanger1: {
    height: 23,
    width: 84,
    marginTop: 11,
    borderRadius: 15,
    marginLeft: 10
  },
  materialButtonPrimary1Row: {
    height: 23,
    flexDirection: "row",
    marginTop: -24,
    marginLeft: 170
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
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  approve: {
    color: "#fff",
    fontSize: 12
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
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  decline: {
    color: "#fff",
    fontSize: 12
  },
  loremIpsum4: {
    color: "rgba(48,64,34,1)",
    height: 49,
    width: 308,
    fontSize: 15,
    marginTop: 10,
    marginLeft: 19
  },
  image3: {
    width: 312,
    height: 130,
    borderRadius: 22,
    marginLeft: 17
  },
  image4: {
    width: 33,
    height: 33,
    borderRadius: 100
  },
  nimnaThira: {
    color: "rgba(48,64,34,1)",
    fontSize: 12
  },
  loremIpsum5: {
    color: "#121212",
    width:200,
    fontSize: 9
  },
  nimnaThiraColumn: {
    width: 300,
    marginLeft: 6,
    marginTop: 2,
    marginBottom: 3
  },
  rect4: {
    width: 75,
    height: 27,
    backgroundColor: "rgba(230,255,214,1)",
    borderWidth: 1,
    borderColor: "rgba(65,117,5,1)",
    borderRadius: 20,
    marginLeft: -140,
    marginTop: 5
  },
  readMore1: {
    color: "#121212",
    fontSize: 10,
    marginTop: 5,
    marginLeft: 9
  },
  image4Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 16,
    marginRight: 15
  },
  backgroundStack: {
    width: 414,
    height: 909
  },
  container123: {
    backgroundColor: "rgba(96,166,18,1)",
    padding: 1,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    borderRadius: 25
  },
  materialSearchBar: {
    height: 50,
    width: 375,
    position: "absolute",
    left: 20,
    top: 130,
    borderRadius: 25
  },
  rect11: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 25,
    flex: 1,
    marginBottom: 2,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2
  },
  inputStyleStack: {
    width: 290,
    height: 49,
    marginLeft: 21,
    borderRadius: 15,
    marginTop: 4
  },
  inputStyle: {
    height: 43,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 257,
    lineHeight: 16,
    position: "absolute",
    left: 0,
    top: 0
  },
  rightIconButton: {
    padding: 11,
    position: "absolute",
    top: -3,
    right: -49,
    alignItems: "center"
  }, 
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 26,
    opacity: 0.6
  },
  frame61: {
    position: "absolute",
    borderRadius: 25,
    top: 53,
    left: 31,
    height: 55,
    width: 351,
    backgroundColor: "rgba(184,233,134,1)"
  },
  sriLankanLeopard: {
    fontWeight:"bold",
    height: 25,
    width: 305,
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(48,64,34,1)",
    fontSize: 20,
    marginTop: 13,
    marginLeft: 23
  },
});

export default AdminBlogs;
