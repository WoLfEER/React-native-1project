import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

const StyledInput = ({
  password,
  label,
  iconName,
  onFocus = () => {},
  style,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(password);
  return (
    <View>
      <View
        style={{
          ...styles.container,
          borderColor: isFocus ? "#FF6C00" : "#E8E8E8",
        }}
      >
        <Icon
          style={{ fontSize: 15, marginRight: 12, color: "#FF6C00" }}
          name={iconName}
        ></Icon>
        <TextInput
          secureTextEntry={isHidePassword}
          onFocus={() => {
            onFocus();
            setIsFocus(true);
          }}
          autoCorrect={false}
          onBlur={() => setIsFocus(false)}
          style={styles.textInput}
          {...props}
        />
        {password && (
          <Icon2
            onPress={() => setIsHidePassword(!isHidePassword)}
            name={isHidePassword ? "eye-outline" : "eye-off-outline"}
            style={{ fontSize: 15, color: "#FF6C00" }}
          />
        )}
      </View>
      {/* {error && <Text style={styles.error}>{error}</Text>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    color: "#212121",
    fontSize: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 12,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  error: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "red",
    marginHorizontal: 16,
  },
});

export default StyledInput;
