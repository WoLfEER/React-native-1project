import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./PostsScreen.styled";

const PostsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.avatarBox}>
        <Image source={require("../../../assets/images/Avatar.jpg")} />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.primaryText}>Natali Romanova</Text>
          <Text style={styles.secondaryText}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;
