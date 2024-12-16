import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { SessionProvider } from "@/context/authContext";

import React from "react";

const TransferLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          
        }}
      />
      <Stack.Screen name="success/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TransferLayout;
