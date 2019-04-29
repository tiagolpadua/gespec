import PropTypes from "prop-types";
import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

// HomeStack

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

function HomeStackTabBarIcon({ focused }) {
  return (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  );
}

HomeStackTabBarIcon.propTypes = {
  focused: PropTypes.bool
};

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: HomeStackTabBarIcon
};

// LinksStack

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

function LinksStackTabBarIcon({ focused }) {
  return (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  );
}

LinksStackTabBarIcon.propTypes = {
  focused: PropTypes.bool
};

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: LinksStackTabBarIcon
};

// SettingsStack

function SettingsStackTabBarIcon({ focused }) {
  return (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  );
}

SettingsStackTabBarIcon.propTypes = {
  focused: PropTypes.bool
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: SettingsStackTabBarIcon
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
