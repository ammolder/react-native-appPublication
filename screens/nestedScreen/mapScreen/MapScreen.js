import React from "react";
import MapView, { Marker } from "react-native-maps";

import { View } from "react-native";
import { styles } from "./MapScreen.styled";

const MapScreen = ({ route }) => {
  const latitude = route.params.latitude;
  const longitude = route.params.longitude;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: "0.01",
          longitudeDelta: "0.006",
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
