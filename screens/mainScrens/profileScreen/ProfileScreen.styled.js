import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  wrapper: {
    paddingTop: 147,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  scrollView: {
    // backgroundColor: "pink",
    // marginHorizontal: 10,
  },
  publication: {
    position: "fixed",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#ffffff",
  },
  logOut: {
    marginTop: 22,
    marginLeft: "auto",
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
  user: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  deleteAvatar: {
    position: "absolute",
    right: 0,
    bottom: 14,
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  nameProfile: {
    marginTop: 92,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  cardPublication: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  photoPublication: {
    width: "100%",
    height: 240,
    marginBottom: 8,
  },
  namePublication: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
  },
  reactions: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  reactionsBox: {
    display: "flex",
    flexDirection: "row",
    marginRight: 24,
    textAlignVertical: "bottom",
  },
  pinReactions: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  infoReactions: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});
