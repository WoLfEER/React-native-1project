import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  KeyboardAvoidingView,
  Image,
} from "react-native";

import { styles } from "./ProfileScreen.styled";
import AddAvatar from "./../../../assets/images/addAvatar.svg";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = () => {
  const imagePath = "../../../assets/images/PhotoBG.jpg";

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
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground
          source={require(imagePath)}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.box}>
              <View style={styles.logoutBtn}></View>
              <Text style={styles.userName}>Natali Romanova</Text>
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

              <View>
                <Image
                  source={require("../../../assets/images/bg.png")}
                  style={{ ...styles.photo }}
                />
                <Text style={styles.photoText}>Лес</Text>
                <View style={styles.linksContainer}>
                  <View style={styles.wrap}>
                    <TouchableOpacity style={styles.link} activeOpacity={0.7}>
                      <Text style={{ ...styles.count, marginLeft: 6 }}>8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{ ...styles.link, marginLeft: 24 }}
                      activeOpacity={0.7}
                      onPress={() => {
                        console.log("favorite");
                      }}
                    >
                      <Icon name="favorite" size={35} color="#BDBDBD" />
                      <Text style={styles.count}>153</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.link} activeOpacity={0.7}>
                    <Text style={styles.locationText}>Ukraine</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
