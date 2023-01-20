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
import Logo from "../../assets/images/addAvatar.svg";
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
  const { email, password, login } = value;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        ...Platform.select({
          ios: {
            marginBottom: IsShowKeyboard ? 78 : 32,
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
              <Text style={styles.title}>Регистрация</Text>
              <View style={styles.avatar}>
                <TouchableOpacity
                  style={styles.avatarIcon}
                  activeOpacity={0.8}
                  onPress={"add"}
                >
                  <Logo fill={"#FF6C00"} stroke={"#FF6C00"} />
                </TouchableOpacity>
              </View>

              <StyledInput
                iconName={"person"}
                placeholder={"Логин"}
                textAlign="center"
                value={login}
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => handleChangeText(value, "login")}
              />

              <StyledInput
                placeholder={"Адрес электронной почты"}
                iconName={"email"}
                value={email}
                textAlign="center"
                style={styles.input}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => handleChangeText(value, "email")}
              />

              <StyledInput
                placeholder={"Пароль"}
                iconName={"lock"}
                textAlign="center"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) => handleChangeText(value, "password")}
              />
              <Button
                style={{
                  marginBottom: 32,
                  marginTop: IsShowKeyboard ? 30 : 44,
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
                  Уже есть аккаунт? Войти
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
    textAlign: "center",
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
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
