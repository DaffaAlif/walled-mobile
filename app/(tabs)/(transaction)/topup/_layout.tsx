import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { SessionProvider } from "@/context/authContext";

import React from "react";

const TopUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <>

              <Text>Testing</Text>
            </>
          ),
        }}
      />
      <Stack.Screen name="success/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TopUpLayout;

const styles = StyleSheet.create({
    
})
