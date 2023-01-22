import { useEffect, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import { styles } from "./RegisterPage.styled";

import AddAvatar from "./../../assets/images/addAvatar.svg";
import StyledInput from "../../components/Button/StyledInput";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const LoginPage = ({ navigation }) => {
  const [isShowKeyboard, setIsShownKeyboard] = useState(false);
  const [value, setValue] = useState(initialState);

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

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => {
      setIsShownKeyboard(false);
      Keyboard.dismiss();
    });
    return () => {
      Keyboard.removeAllListeners("keyboardDidHide");
    };
  }, []);

  const keyboardHide = () => {
    setIsShownKeyboard(false);
    Keyboard.dismiss();

    setValue(initialState);
    console.log(value);
  };
  const handleChangeText = (value, input) => {
    setValue((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const imagePath = "../../assets/images/PhotoBG.jpg";
  const { email, password } = value;

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground source={require(imagePath)} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View style={styles.wrap}>
              <Text style={styles.wrapTitle}>Логин</Text>
              <View style={styles.avatar}>
                <TouchableOpacity
                  style={styles.avatarBtn}
                  activeOpacity={0.7}
                  accessibilityLabel="add avatar"
                  onPress={() => console.log("add avatar")}
                >
                  <AddAvatar fill={"#FF6C00"} stroke={"#FF6C00"} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  paddingBottom: isShowKeyboard ? 15 : 45,
                  width: dimensions,
                }}
              >
                <StyledInput
                  placeholder={"Адрес электронной почты"}
                  iconName={"email"}
                  value={email}
                  textAlign="center"
                  onFocus={() => setIsShownKeyboard(true)}
                  onChangeText={(value) => handleChangeText(value, "email")}
                />

                <StyledInput
                  placeholder={"Пароль"}
                  iconName={"lock"}
                  password
                  textAlign="center"
                  secureTextEntry={true}
                  value={password}
                  onFocus={() => setIsShownKeyboard(true)}
                  onChangeText={(value) => handleChangeText(value, "password")}
                />

                <TouchableOpacity
                  style={{ position: "absolute", right: 16, top: 148 }}
                  activeOpacity={0.8}
                ></TouchableOpacity>
                {!isShowKeyboard ? (
                  <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.8}
                    onPress={keyboardHide}
                  >
                    <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                ) : null}
                {!isShowKeyboard ? (
                  <TouchableOpacity
                    style={styles.btnSecond}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Register")}
                  >
                    <Text style={styles.btnSecondTitle}>
                      Нет аккаунта? Зарегистрироваться
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginPage;
