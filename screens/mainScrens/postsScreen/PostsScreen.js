import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DefaultScreenPosts from "../../nestedScreen/defaultScreenPosts/DefaultScreenPosts";
import CommentsScreen from "../../nestedScreen/commentsScreen/CommentsScreen";
import MapScreen from "../../nestedScreen/mapScreen/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
