import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { styles } from "./createPostsScreen.styled";

const CreateScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");
  const [location, setLocation] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    setLocation(location.coords);
    setPhoto(photo.uri);
  };
  const sendPhoto = async () => {
    navigation.navigate("DefaultScreen", {
      photo,
      description,
      place,
      location,
    });

    setPhoto(null);
    setDescription("");
    setPlace("");
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Camera style={styles.camera} ref={setCamera}>
              {photo && (
                <View style={styles.photoContainer}>
                  <Image source={{ uri: photo }} style={styles.photo} />
                </View>
              )}
              <TouchableOpacity activeOpacity={0.8} onPress={takePhoto}>
                <Image
                  style={styles.photoPub}
                  source={require("../../../assets/Images/photo-pub.jpg")}
                ></Image>
              </TouchableOpacity>
            </Camera>
            <Text style={styles.downloadTitle}>Загрузите фото</Text>
          </View>
          <TextInput
            style={styles.titleInput}
            placeholder={"Название..."}
            value={description}
            onChangeText={setDescription}
          />
          <View style={styles.wrapInput}>
            <TextInput
              style={{
                ...styles.titleInput,
                position: "reletive",
                marginBottom: 32,
                paddingLeft: 28,
              }}
              placeholder={"Местность..."}
              value={place}
              onChangeText={setPlace}
            ></TextInput>
            <Image
              style={styles.mapImage}
              source={require("../../../assets/Images/map-pin.jpg")}
            ></Image>
          </View>
          <TouchableOpacity
            disabled={description === "" || place === "" ? true : false}
            activeOpacity={0.8}
            style={{
              ...styles.btn,
              backgroundColor:
                description === "" || place === "" ? "#F6F6F6" : "#FF6C00",
            }}
            onPress={sendPhoto}
          >
            <Text
              style={{
                color:
                  description === "" || place === "" ? "#BDBDBD" : "#FFFFFF",
              }}
            >
              Опубликовать
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CreateScreen;
