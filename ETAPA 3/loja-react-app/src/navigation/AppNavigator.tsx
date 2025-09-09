import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { RootStackParamList, TabParamList } from "./types";

// Telas do app - área não logada
import HomeScreen from "../screens/HomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import CatalogScreen from "../screens/catalog/CatalogScreen";

const AppStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof FontAwesome.glyphMap = "circle"; // default

          if (route.name === "Home") {
            iconName = "home";
          } 
          if (route.name === "Catalog") {
            iconName = focused ? "tags" : "tags";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} options={{title: 'Menu'}} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="Register" component={RegisterScreen} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Details"
        component={HomeScreen}
        options={{ title: "Detalhes" }}
      />
      <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Acessar" }}
      />
    </AppStack.Navigator>
  );
}

export default function AppNavigator() {
  return <StackNavigator />;
}
