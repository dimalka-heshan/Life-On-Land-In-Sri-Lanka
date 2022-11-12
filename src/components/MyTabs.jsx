import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialBottomTabNavigator();

import HomePage from "../screens/User/Home/Forests/HomePage";
import ForestDetails from "../screens/User/Home/Forests/ForestDetails";
import PlantsDetails from "../screens/User/Home/Plants/PlantsDetails";
import AnimalDetails from "../screens/User/Home/Animals/AnimalDetails";
import AddAnimalPage from "../screens/User/Home/Animals/AddAnimalPage";
import AddPlantPage from "../screens/User/Home/Plants/AddPlantPage";

import OrganizationPage from "../screens/User/Organization/OrganizationPage";


import Profile from "../screens/User/Profile/ProfilePage";
import UpdateUserProfile from '../screens/User/Profile/UpdateUserProfile';

import BlogsAndNews from '../screens/User/BlogsAndNews/BlogsAndNews';

import Donations from '../screens/User/Donations/Donations';
import MyDonationPage from '../screens/User/Donations/MyDonationPage';
import AddPreferencePage from '../screens/User/Donations/AddPreferencePage';
import Payment from '../screens/User/Donations/Payment';
import PaymentSuccessful from '../screens/User/Donations/PaymentSuccessful';

const HomeStack = createNativeStackNavigator();
const DonationStack = createNativeStackNavigator();
const OrganizationStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
     <HomeStack.Screen 
        name="HomePage" 
        component={HomePage}           
        options={{
            headerShown: false,
        }}
      />             
     <HomeStack.Screen 
        name="ForestDetails" 
        component={ForestDetails}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="PlantsDetails" 
        component={PlantsDetails}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AnimalDetails" 
        component={AnimalDetails}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AddAnimalPage" 
        component={AddAnimalPage}
        options={{
          headerShown: false,
      }} 
     />
      <HomeStack.Screen 
        name="AddPlantPage" 
        component={AddPlantPage}
        options={{
          headerShown: false,
      }} 
     />
    </HomeStack.Navigator>
   );
 }

 function DonationStackScreen() {
  return (
    <DonationStack.Navigator>
     <DonationStack.Screen 
        name="Donations" 
        component={Donations}           
        options={{
            headerShown: false,
        }}
      />   
      <DonationStack.Screen 
        name="MyDonationPage" 
        component={MyDonationPage}           
        options={{
            headerShown: false,
        }}
      />   
      <DonationStack.Screen 
        name="AddPreferencePage" 
        component={AddPreferencePage}           
        options={{
            headerShown: false,
        }}
      />  
      <DonationStack.Screen 
        name="Payment" 
        component={Payment}           
        options={{
            headerShown: false,
        }}
      />    
      <DonationStack.Screen 
        name="PaymentSuccessful" 
        component={PaymentSuccessful}           
        options={{
            headerShown: false,
        }}
      />     
    </DonationStack.Navigator>
   );
 }


 function ProfileStackScreen() {
  return (
    <OrganizationStack.Navigator>
     <OrganizationStack.Screen 
        name="Profile" 
        component={Profile}           
        options={{
            headerShown: false,
        }}
      />   
      <OrganizationStack.Screen 
        name="UpdateUserProfile" 
        component={UpdateUserProfile}           
        options={{
            headerShown: false,
        }}
      />      
    </OrganizationStack.Navigator>
   );
 }


 function OrganizationStackScreen() {
  return (
    <ProfileStack.Navigator>
     <ProfileStack.Screen 
        name="OrganizationPage" 
        component={OrganizationPage}           
        options={{
            headerShown: false,
        }}
      />        
    </ProfileStack.Navigator>
   );
 }

function MyTabs() {
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
        component={BlogsAndNews} 
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
        name="OrganizationStackScreen" 
        component={OrganizationStackScreen} 
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
        name="DonationStackScreen" 
        component={DonationStackScreen} 
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
        name="ProfileStackScreen" 
        component={ProfileStackScreen} 
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

export default MyTabs;
  