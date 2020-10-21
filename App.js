import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import IndexScreen from "./src/screens/IndexScreen";
import AccountScreen from "./src/screens/AccountScreen";
import AccountUserScreen from "./src/screens/AccountUserScreen";
import AccountSettingScreen from "./src/screens/AccountSettingScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import DeviceScreen from "./src/screens/DeviceScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const Tabs = () => {
    return (
      <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarLabel: "Dashboard",
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "Account",
          }}
        />
        <Tab.Screen
          name="Device"
          component={DeviceScreen}
          options={{
            tabBarLabel: "Device",
          }}
        />
      </Tab.Navigator>
    );
  };

  const mainStack = () => {
    return (
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{
            title: "Enres",
          }}
        />
        <Stack.Screen
          name="AccountUser"
          component={AccountUserScreen}
          options={{
            title: "Account",
          }}
        />
        <Stack.Screen
          name="AccountSetting"
          component={AccountSettingScreen}
          options={{
            title: "Account",
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ title: "Enres" }}
        />
      </Stack.Navigator>
    );
  };

  return <NavigationContainer>{mainStack()}</NavigationContainer>;
};

export default App;
