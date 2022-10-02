import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/components/HomeScreen";
import SwipeCards from "./src/components/SwipeCards";
import CardFlip from "./src/components/CardFlip";
import Data from "./src/components/Redux/index";

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
        <RootStack.Screen
          name="Information"
          component={SwipeCards}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="CardFlip"
          component={CardFlip}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Data"
          component={Data}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
