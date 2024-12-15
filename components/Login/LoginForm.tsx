import { StyleSheet, Text, View } from "react-native";
import { Image, TextInput } from "react-native";
import { Link, router } from "expo-router";
import ButtonText from "../SharedComponents/ButtonText";
import React from "react";

const LoginForm = () => {
  const walledLogo = require("@/assets/images/WalledLogo.png");
  return (
    <View style={styles.container}>
      <Image source={walledLogo} style={styles.imageLogo} />
      <View style={styles.formContainer}>
        <View style={styles.inputTextContainer}>
          <TextInput style={styles.inputText} placeholder="Email"></TextInput>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
          ></TextInput>
        </View>
        <View style={styles.button}>
          <ButtonText label="Login" onPress={() => router.replace('/')}/>
        </View>
        <View style={styles.registerLink}>
          <Text style={{ fontSize: 18 }}>Don't have account? </Text>
          <Link href={"/(auth)/register"}>
            <Text style={{ color: "#19918F", fontSize: 18 }}>
              Register here
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: { flexDirection: "column" },
  imageLogo: {
    width: 250,
    resizeMode: "contain",
    flex: 2,
    alignSelf: "center",
  },
  formContainer: {
    flex: 2,
    width: 330,
  },
  inputTextContainer: {
    gap: 20,
  },
  registerLink: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  button: { marginTop: 50 },
  inputText: {
    backgroundColor: "#FAFBFD",
    borderRadius: 10,
    fontSize: 16,
    color: "black",
  },
});
