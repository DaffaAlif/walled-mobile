import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

const RootLayout = () => {
  const profilePicture = require("@/assets/images/Profile.png");

  return (
    <Stack initialRouteName="(auth)">
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false
          // headerTitle: () => (
          //   <View style={styles.stackContainer}>
          //     <View style={styles.profileContainer}>
          //       <Image source={profilePicture} style={styles.profilePic} />
          //       <View>
          //         <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          //           Chelsea Immanuela
          //         </Text>
          //         <Text style={{ fontWeight: "light" }}>Personal Account</Text>
          //       </View>
          //     </View>
          //     <Ionicons name="sunny-outline" size={38} color="#25292e" />
          //   </View>
          // ),
        }}
      />

      <Stack.Screen name="(transaction)" options={{ headerShown:false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  stackContainer: {
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    gap: 8,
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
