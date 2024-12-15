import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";


import React from "react";

const TransactionLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="topup/index"
        options={{
          headerTitle: () => (
            <View style={styles.stackContainer}>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>Top Up</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="transfer/index"
        options={{
          headerTitle: () => (
            <View style={styles.stackContainer}>
              <Text style={{ fontSize: 16, fontWeight: 700 }}>Transfer</Text>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

export default TransactionLayout;

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
