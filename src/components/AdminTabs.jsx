import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialBottomTabNavigator();

import AdminHomePage from "../screens/Admin/Home/AdminHomePage";
import AddForestPage from "../screens/Admin/Home/AddForestPage";
import UpdateForest from "../screens/Admin/Home/UpdateForest";

import AdminOrganization from "../screens/Admin/Organization/AdminOrganization";
import AdminProfile from "../screens/Admin/Profile/AdminProfile";
import AdminBlogsAndNews from '../screens/Admin/BlogsAndNews/AdminBlogsAndNews';
import AdminDonations from '../screens/Admin/Donations/AdminDonations'

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
     <HomeStack.Screen 
        name="AdminHomePage" 
        component={AdminHomePage}           
        options={{
            headerShown: false,
        }}
      />             
     <HomeStack.Screen 
        name="AddForestPage" 
        component={AddForestPage}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="UpdateForest" 
        component={UpdateForest}
        options={{
          headerShown: false,
      }} 
     />
    </HomeStack.Navigator>
   );
 }

function AdminTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ 
      backgroundColor: 'white', 
      height:75, 
      borderTopLeftRadius:25,
      borderTopRightRadius:25,
      paddingTop:13 
  }}
    tabBarLabel="false"
    tabBarOptions={{      
      showLabel: false,
    }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            }}>
              <FontAwesome5
                name="home"
                size={25}
                color={focused ? '#228B22' : '#9D9D9D'}
              ></FontAwesome5>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="BlogsAndNews" 
        component={AdminBlogsAndNews} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            }}>
              <FontAwesome5
                name="poll-h"
                size={25}
                color={focused ? '#228B22' : '#9D9D9D'}
              ></FontAwesome5>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Organization" 
        component={AdminOrganization} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            }}>
              <FontAwesome5
                name="compass"
                size={25}
                color={focused ? '#228B22' : '#9D9D9D'}
              ></FontAwesome5>
            </View>
          ),
          headerShown: false,
        }}
      />
            
      <Tab.Screen 
        name="Donations" 
        component={AdminDonations} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            }}>
              <FontAwesome5
                name="poll"
                size={25}
                color={focused ? '#228B22' : '#9D9D9D'}
              ></FontAwesome5>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen 
        name="Profile" 
        component={AdminProfile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
            }}>
              <FontAwesome5
                name="user"
                size={25}
                color={focused ? '#228B22' : '#9D9D9D'}
              ></FontAwesome5>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})

export default AdminTabs;
  