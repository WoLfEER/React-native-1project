import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./CommentsScreen.style";

const CommentsScreen = () => {
  const [dimensions, setDimension] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimension(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener?.("change", onChange);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <Image
            source={require("../../../assets/images/bg.png")}
            style={{ ...styles.photo, width: dimensions }}
          />

          <View>
            <TextInput
              style={styles.input}
              placeholder={"Комментировать..."}
              placeholderTextColor={"#BDBDBD"}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.inputBtn}
            ></TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;
