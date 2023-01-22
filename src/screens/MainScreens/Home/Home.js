import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";

import { Feather, Ionicons } from "@expo/vector-icons";

import AllScreens from "../AllScreens";
import PostsScreen from "../PostsScreen/PostsScreen";
import CommentsScreen from "../CommentsScreen";
import CreatePostsScreen from "../CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";

const MainTab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <MainTab.Navigator initialRouteName="PostsScreen">
      <MainTab.Screen
        name="Публикации"
        component={AllScreens}
        options={() => {
          return {
            title: "Публикации",
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
            headerRight: () => (
              <Feather
                name="log-out"
                color="#BDBDBD"
                size={24}
                style={{ marginRight: 10 }}
                onPress={() => {
                  console.log("logout");
                }}
              />
            ),
            tabBarShowLabel: false,

            tabBarIcon: () => (
              <Feather name="grid" color="rgba(33, 33, 33, 0.8)" size={24} />
            ),
          };
        }}
      />
      <MainTab.Screen
        name="Создать публикацию"
        component={CreatePostsScreen}
        options={() => {
          return {
            title: "Создать публикацию",
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
            tabBarShowLabel: false,
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
            tabBarStyle: { display: "none" },
            tabBarIcon: () => (
              <View
                style={{
                  width: 70,
                  height: 40,
                  backgroundColor: "#FF6C00",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="add" size={24} color="#FFFFFF" />
              </View>
            ),
          };
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Feather name="user" color="rgba(33, 33, 33, 0.8)" size={24} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default HomeScreen;
