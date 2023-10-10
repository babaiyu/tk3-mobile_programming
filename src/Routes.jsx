import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// All screen here...
import HomeScreen from "./screens/HomeScreen";
import ReportScreen from "./screens/ReportScreen";

// Creating tab ui
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "HOME_SCREEN") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "REPORT_SCREEN") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="HOME_SCREEN"
          component={HomeScreen}
          options={{ tabBarLabel: "Beranda", headerTitle: "Beranda" }}
        />
        <Tab.Screen
          name="REPORT_SCREEN"
          component={ReportScreen}
          options={{ tabBarLabel: "Laporan", headerTitle: "Laporan" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
