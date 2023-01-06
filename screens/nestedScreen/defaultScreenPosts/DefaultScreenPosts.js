import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { styles } from "./DefaultScreenPosts.styled";
import MapView, { Marker } from "react-native-maps";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

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
      <View styled={styles.wrapPublication}>
        <FlatList
          vertical
          showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
          contentContainerStyle={styles.listContainer}
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View>
              <Image source={{ uri: item.photo }} style={styles.image} />
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.wrapInfo}>
                <View style={styles.wrapComments}>
                  <EvilIcons
                    style={styles.icon}
                    name="comment"
                    size={24}
                    color="black"
                  />
                  <TouchableOpacity
                    disabled={false}
                    activeOpacity={0.6}
                    onPress={() => {
                      navigation.navigate("Comments");
                    }}
                  >
                    <Text style={styles.numberComments}>0</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.wrapLocation}>
                  <Ionicons
                    style={{ ...styles.icon, marginRight: 3 }}
                    name="location-outline"
                    size={24}
                    color="black"
                  />
                  <TouchableOpacity
                    disabled={false}
                    activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate("Map", item.location);
                    }}
                  >
                    <Text style={styles.textLocation}>{item.place}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DefaultScreenPosts;
