import { StyleSheet, Text, View } from "react-native";
import { Image, TextInput } from "react-native";
import { Link } from "expo-router";
import ButtonText from "../SharedComponents/ButtonText";
import React from "react";

const RegisterForm = () => {
  const walledLogo = require("@/assets/images/WalledLogo.png");
  return (
    <View style={styles.container}>
      <Image source={walledLogo} style={styles.imageLogo} />
      <View style={styles.formContainer}>
        <View style={styles.inputTextContainer}>
          <TextInput style={styles.inputText} placeholder="Fullname" />
          <TextInput style={styles.inputText} placeholder="Email" />
          <TextInput style={styles.inputText} placeholder="Password" />

          <TextInput style={styles.inputText} placeholder="Avatar Url" />
        </View>
        <View style={styles.button}>
          <ButtonText label="Register" />
        </View>
        <View style={styles.registerLink}>
          <Text style={{ fontSize: 18 }}>Have account? </Text>
          <Link
            href={"/(auth)/login"}
            style={{ color: "#19918F", fontSize: 18 }}
          >
              <Text style={{ color: "#19918F", fontSize: 18 }}>
              Login here
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default RegisterForm;

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
