import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    flex: 1,
  },
  placeholder: {
    justifyContent: "center",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    marginTop: 32,
    borderRadius: 8,
  },
  circle: {
    position: "absolute",
    bottom: 240 / 2 - 32,
    left: 320 / 2,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  cameraIcon: {
    fontSize: 22,
    color: "#BDBDBD",
  },
  infoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  input: {
    fontFamily: "Roboto-Regular",
    marginTop: 16,
    height: 56,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  locationIcon: {
    position: "absolute",
    bottom: 20,
    fontSize: 22,
    color: "#E8E8E8",
  },
});
