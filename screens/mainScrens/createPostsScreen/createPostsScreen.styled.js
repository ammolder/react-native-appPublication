import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  camera: {
    position: "relative",
    width: "100%",
    height: 240,
    marginBottom: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
  },
  photoContainer: {
    position: "absolute",
    top: 0,
    left: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 20,
  },
  photoPub: {
    position: "absolute",
    top: 90,
    left: "50%",
    transform: [{ translateX: -25 }],
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  downloadTitle: {
    color: "#BDBDBD",
    marginBottom: 32,
  },
  titleInput: {
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  locationInput: {},
  mapImage: {
    width: 24,
    height: 24,
    position: "absolute",
    left: 0,
    top: 13,
  },
  btn: {
    marginBottom: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    borderRadius: 100,
  },
  btnTitle: {},
});
