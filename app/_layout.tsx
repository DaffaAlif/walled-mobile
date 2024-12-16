import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { SessionProvider } from "@/context/authContext";

import React from "react";

const RootLayout = () => {
  return (
    <SessionProvider>
      <Stack initialRouteName="(auth)">
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SessionProvider>
  );
};

export default RootLayout;
