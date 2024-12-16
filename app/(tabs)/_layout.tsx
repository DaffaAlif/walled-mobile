import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#19918F",
          },
          tabBarIcon: () => (
            <>
              <Ionicons
                name="home-sharp"
                size={20}
                style={{ color: "#19918F" }}
              />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="(transaction)/topup"
        options={{
          headerShown: false,
          tabBarLabel: "Top up",
          tabBarLabelStyle: {
            color: "#19918F",
          },
          tabBarIcon: () => (
            <>
              <Ionicons name="add" size={20} style={{ color: "#19918F" }} />
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="(transaction)/transfer"
        options={{
          headerShown: false,
          tabBarLabel: "Transfer",
          tabBarLabelStyle: {
            color: "#19918F",
          },
          tabBarIcon: () => (
            <>
              <Ionicons name="send" size={20} style={{ color: "#19918F" }} />
            </>
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
