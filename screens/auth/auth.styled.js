import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "fixed",
    width: "100%",
    paddingHorizontal: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,

    justifyContent: "flex-end",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
  },
  containerAvatar: {
    position: "absolute",
    top: -60,
    right: "50%",
    justifyContent: "center",
    width: 132,
    transform: [{ translateX: 50 }],
  },
  backgroundAvatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addAvatar: {
    position: "absolute",
    right: 0,
    bottom: 14,
  },
  addPhoto: {
    borderRadius: 100,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  inputTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 36,
    color: "#212121",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderColor: "#E8E8E8",
    height: 40,
    borderRadius: 6,
    backgroundColor: "#F6F6F6",
  },
  btnTitle: {
    color: "#FFFFFF",
  },
  btn: {
    marginBottom: 16,
    paddingHorizontal: 32,
    paddingVertical: 16,
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  enter: {
    marginLeft: "auto",
    marginRight: "auto",
    alignContent: "center",
  },
  enterTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  containerPhoto: {
    width: 132,
  },
});
