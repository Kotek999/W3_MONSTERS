import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen";
import CardScreen from "./src/components/CardScreen";
import SwipeCards from "./src/components/SwipeCards";

const RootStack = createStackNavigator();

export default function App() {
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name="Dane" component={CardScreen} />
        <RootStack.Screen
          name="Swipe"
          component={SwipeCards}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
