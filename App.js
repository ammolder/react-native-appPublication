import React, { useCallback } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Login from "./screens/auth/LoginScreen";
import Register from "./screens/auth/RegistrationScreen";
import Home from "./screens/nestedScreen/home/Home";
import { styles } from "./screens/auth/auth.styled";
import MapScreen from "./screens/nestedScreen/mapScreen/MapScreen";
import CommentsScreen from "./screens/nestedScreen/commentsScreen/CommentsScreen";

SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();

export default () => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainStack.Navigator initialRouteName="RegistrationScreen">
          <MainStack.Screen
            name="RegistrationScreen"
            component={Register}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="LoginScreen"
            component={Login}
            options={{ headerShown: false }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          {/* <MainStack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{ headerShown: true }}
          /> */}
          {/* <MainStack.Screen
            name="CommentsScreen"
            component={CommentsScreen}
            options={{ headerShown: true }}
          /> */}
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};
