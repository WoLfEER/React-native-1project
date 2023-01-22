import React, { useState, useEffect } from "react";
import {
  View,
  Keyboard,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { style } from "./CreatePostsScreen.styled";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Place from "react-native-vector-icons/MaterialIcons";
import Button from "../../../components/Button/Button";

const CreatePostsScreen = () => {
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
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={style.container}>
          <ScrollView>
            <View style={{ ...style.placeholder, width: dimensions }}>
              <TouchableOpacity style={style.circle}>
                <Icon name="camera" style={style.cameraIcon} />
              </TouchableOpacity>
            </View>
            <Text style={style.infoText}>Загрузите фото</Text>

            <View style={{ position: "relative" }}>
              <TextInput style={style.input} placeholder="Название..." />
              <TextInput
                style={{ ...style.input, paddingLeft: 26 }}
                placeholder="Местность..."
              />
              <View>
                <Place style={style.locationIcon} name="place" />
              </View>
              <Button style={{ marginTop: 32 }} title="Опубликовать"></Button>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CreatePostsScreen;
