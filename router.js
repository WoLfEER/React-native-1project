import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "./src/screens/MainScreens/ProfileScreen";
import CommentsScreen from "./src/screens/MainScreens/CommentsScreen";
import CreatePostsScreen from "./src/screens/MainScreens/CreatePostsScreen";
import LoginPage from "./src/screens/LoginPage";
import RegisterPage from "./src/screens/RegisterPage";
import Home from "./src/screens/MainScreens/Home";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainTab.Navigator tabBar={() => null}>
        <MainTab.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        {/* <MainTab.Screen name="Comments" component={CommentsScreen} />
        <MainTab.Screen
          name="CreatePost"
          component={CreatePostsScreen}
        ></MainTab.Screen> */}
      </MainTab.Navigator>
    );
  }

  return (
    <AuthStack.Navigator initialRouteName="">
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegisterPage}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginPage}
      />
    </AuthStack.Navigator>
  );
};
