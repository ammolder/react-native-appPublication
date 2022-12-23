import React, { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./ProfileScreen.styled";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const hundleSubmit = () => {
    setState(initialState);
    navigation.navigate("Home");
    console.log("state :", state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/Images/ImageBg.jpg")}
        >
          <View style={styles.wrapper}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.publication}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("LoginScreen")}
                >
                  <Image
                    style={styles.logOut}
                    source={require("../../../assets/Images/log-out.jpg")}
                  />
                </TouchableOpacity>
                <View style={styles.containerAvatar}>
                  <View style={styles.backgroundAvatar}></View>
                  <Image
                    style={styles.user}
                    source={require("../../../assets/Images/user.jpg")}
                  ></Image>
                  <TouchableOpacity style={styles.deleteWrap}>
                    <Image
                      style={styles.deleteAvatar}
                      source={require("../../../assets/Images/deletePhoto.jpg")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <Text style={styles.nameProfile}>Natali Romanova</Text>

                <ScrollView style={styles.scrollView}>
                  <View style={styles.cardPublication}>
                    <Image
                      style={styles.photoPublication}
                      source={require("../../../assets/Images/Rectangle1.jpg")}
                    ></Image>
                    <Text style={styles.namePublication}>Лес</Text>
                    <View style={styles.reactions}>
                      <View style={styles.reactionsBox}>
                        <Image
                          style={styles.pinReactions}
                          source={require("../../../assets/Images/message-circle.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>8</Text>
                      </View>

                      <View style={styles.reactionsBox}>
                        <Image
                          style={styles.pinReactions}
                          source={require("../../../assets/Images/like.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>153</Text>
                      </View>
                      <View
                        style={{ ...styles.reactionsBox, marginLeft: "auto" }}
                      >
                        <Image
                          style={{ ...styles.pinReactions }}
                          source={require("../../../assets/Images/map-pin.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>Ukraine</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.cardPublication}>
                    <Image
                      style={styles.photoPublication}
                      source={require("../../../assets/Images/Rectangle2.jpg")}
                    ></Image>
                    <Text style={styles.namePublication}>
                      Закат на Черном море
                    </Text>
                    <View style={styles.reactions}>
                      <View style={styles.reactionsBox}>
                        <Image
                          style={styles.pinReactions}
                          source={require("../../../assets/Images/message-circle.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>3</Text>
                      </View>

                      <View style={styles.reactionsBox}>
                        <Image
                          style={styles.pinReactions}
                          source={require("../../../assets/Images/like.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>200</Text>
                      </View>
                      <View
                        style={{ ...styles.reactionsBox, marginLeft: "auto" }}
                      >
                        <Image
                          style={{ ...styles.pinReactions }}
                          source={require("../../../assets/Images/map-pin.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>Ukraine</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.cardPublication}>
                    <Image
                      style={styles.photoPublication}
                      source={require("../../../assets/Images/Rectangle3.jpg")}
                    ></Image>
                    <Text style={styles.namePublication}>
                      Старый домик в Венеции
                    </Text>
                    <View style={styles.reactions}>
                      <View style={styles.reactionsBox}>
                        <Image
                          style={styles.pinReactions}
                          source={require("../../../assets/Images/message-circle.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>50</Text>
                      </View>

                      <View style={styles.reactionsBox}>
                        <Image
                          style={styles.pinReactions}
                          source={require("../../../assets/Images/like.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>200</Text>
                      </View>
                      <View
                        style={{ ...styles.reactionsBox, marginLeft: "auto" }}
                      >
                        <Image
                          style={{ ...styles.pinReactions }}
                          source={require("../../../assets/Images/map-pin.jpg")}
                        ></Image>
                        <Text style={styles.infoReactions}>Italy</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
