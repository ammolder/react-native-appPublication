import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./createPostsScreen.styled";

const initialState = {
  name: "",
  place: "",
};

const CreateScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

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
        <View style={styles.form}>
          <View>
            <View style={styles.backgroundPhoto}>
              <TouchableOpacity
                activeOpacity={0.8}
                // onPress={hundleSubmit}
              >
                <Image
                  style={styles.photoPub}
                  source={require("../../../assets/Images/photo-pub.jpg")}
                ></Image>
              </TouchableOpacity>
            </View>
            <Text style={styles.downloadTitle}>Загрузите фото</Text>
          </View>
          <TextInput
            style={styles.titleInput}
            placeholder={"Название..."}
            value={
              <Image
                style={styles.mapImage}
                source={require("../../../assets/Images/map-pin.jpg")}
              ></Image>
            }
          ></TextInput>
          <View style={styles.wrapInput}>
            <TextInput
              style={{
                ...styles.titleInput,
                position: "reletive",
                marginBottom: 32,
                paddingLeft: 28,
              }}
              placeholder={"Местность..."}
            ></TextInput>
            <Image
              style={styles.mapImage}
              source={require("../../../assets/Images/map-pin.jpg")}
            ></Image>
          </View>
          <TouchableOpacity
            disabled={false}
            activeOpacity={0.8}
            style={styles.btn}
            // onPress={hundleSubmit}
          >
            <Text style={styles.btnTitle}>Опубликовать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CreateScreen;
