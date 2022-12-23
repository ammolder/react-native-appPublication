import React, { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./auth.styled";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  // const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  // const firstUpdate = useRef(true);
  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
  //     setKeyboardStatus("Keyboard Shown");
  //   });
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //     setKeyboardStatus("Keyboard Hidden");
  //     firstUpdate.current = false;
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

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
          source={require("../../assets/Images/ImageBg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                height: !isShowKeyboard ? 549 : 374,
                paddingBottom: !isShowKeyboard ? 78 : 0,
              }}
            >
              <View style={styles.containerAvatar}>
                <View style={styles.backgroundAvatar}></View>
                <TouchableOpacity style={styles.addAvatar}>
                  <Image
                    style={styles.addPhoto}
                    source={require("../../assets/Images/addPhoto.jpg")}
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
                  marginBottom: !isShowKeyboard ? 32 : 43,
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
              {!isShowKeyboard && (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={hundleSubmit}
                  >
                    <Text style={styles.btnTitle}>Регистрация</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.enter}
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    <Text style={styles.enterTitle}>
                      Уже есть акаунт? Войти
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
