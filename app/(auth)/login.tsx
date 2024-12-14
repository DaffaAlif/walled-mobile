import { StyleSheet, Text, View } from "react-native";
import LoginForm from "@/components/Login/LoginForm";

import React from "react";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
