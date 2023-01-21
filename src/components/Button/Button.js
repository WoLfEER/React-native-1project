import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ onPress = () => {}, activeOpacity, title, style }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...style }}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    padding: 15,
    borderRadius: 100,
    height: 50,
    marginHorizontal: 16,
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff",
  },
});

export default Button;
