import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PostsScreen from "../../mainScrens/postsScreen/PostsScreen";
import CreateScreen from "../../mainScrens/createPostsScreen/CreatePostsScreen";
import ProfileScreen from "../../mainScrens/profileScreen/ProfileScreen";
import { styles } from "./Home.styled";

const MainTab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator
      options={{
        showLabel: true,
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публикации",
          tabBarShowLabel: false,
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Image
                style={styles.logOut}
                source={require("../../../assets/Images/log-out.jpg")}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="apps-outline" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          title: "Создать публикацию",
          tabBarShowLabel: false,
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("PostsScreen")}
            >
              <Image
                style={styles.arrowLeft}
                source={require("../../../assets/Images/arrow-left.jpg")}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name="ios-create-outline" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Профиль",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
export default Home;
