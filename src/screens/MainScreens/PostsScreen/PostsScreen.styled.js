import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: "#fff",
  },
  avatar: {
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  avatarBox: {
    marginTop: 32,
    marginLeft: 16,
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  primaryText: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    lineHeight: 15,
  },
  secondaryText: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,

    opacity: 0.8,
  },
});

// font-family: 'Roboto';
// font-style: normal;
// font-weight: 400;
// font-size: 11px;
// line-height: 13px;
