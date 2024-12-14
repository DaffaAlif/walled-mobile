import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";
import { Link } from "expo-router";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeLayout = () => {
  const profilePicture = require("@/assets/images/Profile.png");
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View style={styles.stackContainer}>
              <View style={styles.profileContainer}>
                <Image source={profilePicture} style={styles.profilePic} />
                <View>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Chelsea Immanuela
                  </Text>
                  <Text style={{ fontWeight: "light" }}>Personal Account</Text>
                </View>
              </View>
              <Link href={'/(auth)/login'}>
                <Ionicons name="sunny-outline" size={38} color="#25292e" />
              </Link>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default HomeLayout;

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
