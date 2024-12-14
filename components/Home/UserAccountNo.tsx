import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserAccountNo = () => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={{ fontWeight: 400, fontSize: 20, color: "#fff" }}>
        Account No.
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
        100899
      </Text>
    </View>
  );
};

export default UserAccountNo;

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    padding: 15,
    margin: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#19918F",
    borderRadius: 10,
  },
});
