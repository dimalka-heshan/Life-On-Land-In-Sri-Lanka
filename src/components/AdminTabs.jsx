import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialBottomTabNavigator();

import AdminHomePage from "../screens/Admin/Home/Forests/AdminHomePage";
import AddForestPage from "../screens/Admin/Home/Forests/AddForestPage";
import UpdateForest from "../screens/Admin/Home/Forests/UpdateForest";
import AdminForestDetails from '../screens/Admin/Home/Forests/AdminForestDetails';
import AdminAddAnimalPage from '../screens/Admin/Home/Animals/AdminAddAnimalPage';
import AdminAddPlantPage from '../screens/Admin/Home/Plants/AdminAddPlantPage';
import AdminAnimalDetails from '../screens/Admin/Home/Animals/AdminAnimalDetails';
import AdminPlantsDetails from '../screens/Admin/Home/Plants/AdminPlantsDetails';
import AdminUpdateAnimal from '../screens/Admin/Home/Animals/AdminUpdateAnimal';
import AdminUpdatePlant from '../screens/Admin/Home/Plants/AdminUpdatePlant';
import AdminPlantsApprovalList from '../screens/Admin/Home/Plants/AdminPlantsApprovalList';
import AdminAnimalApprovalList from '../screens/Admin/Home/Animals/AdminAnimalApprovalList';
import AdminsAnimalsApproval from '../screens/Admin/Home/Animals/AdminsAnimalsApproval';
import AdminsPlantApproval from '../screens/Admin/Home/Plants/AdminsPlantApproval';

import AdminOrganization from "../screens/Admin/Organization/AdminOrganization";
import AdminAddOrganizationPage from '../screens/Admin/Organization/AdminAddOrganizationPage';
import AdminSpecificOrgPage from '../screens/Admin/Organization/AdminSpecificOrgPage';

import AdminProfile from "../screens/Admin/Profile/AdminProfile";
import UpdateAdminProfile from '../screens/Admin/Profile/UpdateAdminProfile';

import AdminBlogsAndNews from '../screens/Admin/BlogsAndNews/AdminBlogsAndNews';

import AdminNews from '../screens/Admin/Donations/AdminNews';
import AdminSpecificNews from '../screens/Admin/Donations/AdminSpecificNews';

const HomeStack = createNativeStackNavigator();
const OrganizationStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const NewsStack = createNativeStackNavigator();

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
     <HomeStack.Screen 
        name="AdminForestDetails" 
        component={AdminForestDetails}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminAddAnimalPage" 
        component={AdminAddAnimalPage}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminAddPlantPage" 
        component={AdminAddPlantPage}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminAnimalDetails" 
        component={AdminAnimalDetails}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminPlantsDetails" 
        component={AdminPlantsDetails}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminUpdateAnimal" 
        component={AdminUpdateAnimal}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminUpdatePlant" 
        component={AdminUpdatePlant}
        options={{
          headerShown: false,
      }} 
     />
      <HomeStack.Screen 
        name="AdminPlantsApprovalList" 
        component={AdminPlantsApprovalList}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminAnimalApprovalList" 
        component={AdminAnimalApprovalList}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminsAnimalsApproval" 
        component={AdminsAnimalsApproval}
        options={{
          headerShown: false,
      }} 
     />
     <HomeStack.Screen 
        name="AdminsPlantApproval" 
        component={AdminsPlantApproval}
        options={{
          headerShown: false,
      }} 
     />
    </HomeStack.Navigator>
   );
 }

 function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
     <ProfileStack.Screen 
        name="AdminProfile" 
        component={AdminProfile}           
        options={{
            headerShown: false,
        }}
      />   
      <ProfileStack.Screen 
        name="UpdateAdminProfile" 
        component={UpdateAdminProfile}           
        options={{
            headerShown: false,
        }}
      />      
    </ProfileStack.Navigator>
   );
 }


 function OrganizationStackScreen() {
  return (
    <OrganizationStack.Navigator>
     <OrganizationStack.Screen 
        name="AdminOrganization" 
        component={AdminOrganization}           
        options={{
            headerShown: false,
        }}
      /> 
      <OrganizationStack.Screen 
        name="AdminSpecificOrgPage" 
        component={AdminSpecificOrgPage}           
        options={{
            headerShown: false,
        }}
      /> 
      <OrganizationStack.Screen 
        name="AdminAddOrganizationPage" 
        component={AdminAddOrganizationPage}           
        options={{
            headerShown: false,
        }}
      />  
    </OrganizationStack.Navigator>
   );
 }

 function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
     <NewsStack.Screen 
        name="AdminNews" 
        component={AdminNews}           
        options={{
            headerShown: false,
        }}
      /> 
      <NewsStack.Screen 
        name="AdminSpecificNews" 
        component={AdminSpecificNews}           
        options={{
            headerShown: false,
        }}
      /> 
    </NewsStack.Navigator>
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
        name="NewsStackScreen" 
        component={NewsStackScreen} 
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

export default AdminTabs;
  