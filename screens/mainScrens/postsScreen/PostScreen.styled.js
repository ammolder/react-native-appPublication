import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 171,
    height: 60,
    marginTop: 32,
    marginLeft: 16,
  },
  nav: {
    marginLeft: 8,
  },
  userImage: {
    width: 60,
    height: 60,
  },
  name: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: "#21212180",
  },
});
