import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginBottom: 115,
  },
  map: {
    flex: 1,
    width: 100,
    height: 100,
  },
  wrap: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginTop: 32,
    marginBottom: 32,
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
  wrapPublication: {
    marginBottom: 32,
  },
  listContainer: {},
  image: {
    minWidth: "100%",
    height: 240,
    marginBottom: 8,
    marginRight: 20,
    borderRadius: 8,
  },
  description: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
  wrapInfo: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 32,
  },
  wrapComments: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    color: "#BDBDBD",
    marginRight: 6,
  },
  numberComments: {
    color: "#BDBDBD",
  },
  wrapLocation: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  },
  textLocation: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
});
