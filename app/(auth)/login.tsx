import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    maxHeight: 300,
  },
});
