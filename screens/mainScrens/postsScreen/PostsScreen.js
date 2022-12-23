import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./PostScreen.styled";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Image
          style={styles.userImage}
          source={require("../../../assets/Images/user.jpg")}
        ></Image>
        <View style={styles.nav}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;
