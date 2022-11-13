import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyTabs from "./src/components/MyTabs";
import AdminTabs from "./src/components/AdminTabs";
import Login from "./src/screens/User/Login";
import Registration from "./src/screens/User/Registration";
import LandingPage from "./src/screens/User/LandingPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AdminTabs"
          component={AdminTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

