import React, { useState, useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./screens/auth/auth.styled";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

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

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const hundleSubmit = () => {
    setState(initialState);
    console.log("state :", state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/Images/ImageBg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                height: keyboardStatus === "Keyboard Hidden" ? 549 : 374,
                paddingBottom: keyboardStatus === "Keyboard Hidden" ? 78 : 0,
              }}
            >
              <View style={styles.containerAvatar}>
                <View style={styles.backgroundAvatar}></View>
                <TouchableOpacity style={styles.addAvatar}>
                  <Image
                    style={styles.addPhoto}
                    source={require("./assets/Images/addPhoto.jpg")}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.header}>
                <Text style={styles.inputTitle}>Регистрация</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder={"Логин"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.login}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, login: value }));
                }}
              />
              <TextInput
                style={styles.input}
                placeholder={"Адрес электронной почты"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, email: value }));
                }}
              />
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: keyboardStatus === "Keyboard Hidden" ? 32 : 43,
                }}
                secureTextEntry={true}
                placeholder={"Пароль"}
                placeholderTextColor={"#BDBDBD"}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={(value) => {
                  setState((prevState) => ({ ...prevState, password: value }));
                }}
              ></TextInput>
              {keyboardStatus === "Keyboard Hidden" && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={hundleSubmit}
                  >
                    <Text style={styles.btnTitle}>Регистрация</Text>
                  </TouchableOpacity>
                  <Button
                    style={styles.enterTitle}
                    color={"#1B4371"}
                    title="Уже есть акаунт? Войти"
                  />
                </View>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
