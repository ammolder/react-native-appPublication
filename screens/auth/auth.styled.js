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
  enterTitle: {},
  containerPhoto: {
    width: 132,
  },
});
