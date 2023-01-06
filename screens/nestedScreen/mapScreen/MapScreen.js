import React from "react";
import MapView, { Marker } from "react-native-maps";

import { View } from "react-native";
import { styles } from "./MapScreen.styled";

const MapScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: "52.39321254682809",
          longitude: "16.94855956815107",
          latitudeDelta: "0.01",
          longitudeDelta: "0.006",
        }}
      >
        <Marker
          coordinate={{
            latitude: "52.39321254682809",
            longitude: "16.94855956815107",
          }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
