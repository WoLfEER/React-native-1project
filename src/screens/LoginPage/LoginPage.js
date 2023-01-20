import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Button from "../../components/Button/Button";
import StyledInput from "../../components/Button/StyledInput";

const initialState = {
  email: "",
  login: "",
  password: "",
};

const RegisterPage = () => {
  const [value, setValue] = useState(initialState);
  const [IsShowKeyboard, setIsShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const formSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(value);
    setValue(initialState);
  };

  const handleChangeText = (value, input) => {
    setValue((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const imagePath = "../../../assets/PhotoBG.jpg";
  const { email, password } = value;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        ...Platform.select({
          ios: {
            marginBottom: IsShowKeyboard ? 78 : 22,
          },
          android: {
            marginBottom: 8,
          },
        }),
      }}
    >
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.container}>
          <ImageBackground source={require(imagePath)} style={styles.image}>
            <View style={styles.form}>
              <Text style={styles.title}>Войти</Text>

              <StyledInput
                iconName={"mail"}
                placeholder={"Адрес электронной почты"}
                value={email}
                textAlign="center"
                style={styles.input}
                error="email error"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => handleChangeText(value, "email")}
              />

              <StyledInput
                placeholder={"Пароль"}
                iconName={"lock"}
                textAlign="center"
                style={styles.input}
                password
                value={password}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => handleChangeText(value, "password")}
              />
              <Button
                style={{
                  marginBottom: 32,
                  marginTop: IsShowKeyboard ? 30 : 43,
                }}
                activeOpacity={0.8}
                title={"Зарегистрироваться"}
                onPress={formSubmit}
              ></Button>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => console.log("route")}
              >
                <Text
                  style={{
                    ...styles.bottomText,
                  }}
                >
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    fontFamily: "Roboto-Regular",
  },

  avatar: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    left: Dimensions.get("window").width / 2 - 60,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarIcon: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  title: {
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 32,
    fontSize: 30,
    color: "#212121",
  },

  bottomText: {
    fontFamily: "Roboto-Regular",
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
});

export default RegisterPage;
