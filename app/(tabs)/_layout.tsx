import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeLayout = () => {

  return (
    <Tabs >
      <Tabs.Screen
        name="(home)"
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({
  stackContainer: {
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    width: 200,
    justifyContent: "flex-end",
  },
  profileContainer: {
    flexDirection: "row",
    gap: 8,
    flex: 2,
    alignItems: "center",
  },

  profilePic: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#19918F",
    width: 60,
    height: 60,
  },
});
