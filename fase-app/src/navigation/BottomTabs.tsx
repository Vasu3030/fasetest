import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import EventListScreen from "../screens/EventsListScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen name="Évènements" component={EventListScreen} />
        <Tab.Screen name="Favories" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
