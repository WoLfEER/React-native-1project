import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen/PostsScreen";
import CommentsScreen from "./CommentsScreen";

const Stack = createStackNavigator();

const AllScreens = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PostsScreen">
      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerStyle: {
            borderBottomWidth: 0.5,
            borderBottomColor: "rgba(0, 0, 0, 0.3)",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            color: "#212121",
            fontSize: 17,
            lineHeight: 22,
          },
          headerLeft: () => (
            <Feather
              name="arrow-left"
              color="#rgba(33, 33, 33, 0.8)"
              size={24}
              style={{ marginLeft: 16 }}
              onPress={() => {
                navigation.navigate("PostsScreen");
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AllScreens;
