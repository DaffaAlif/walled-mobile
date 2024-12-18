import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from "react-native";
import { Link, router } from "expo-router";
import ButtonText from "../SharedComponents/ButtonText";
import React from "react";

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  error: string;
  onLogin: () => void;
};

const LoginForm = ({ email, setEmail, password, setPassword, loading, error, onLogin }: Props) => {
  const walledLogo = require("@/assets/images/WalledLogo.png");

  return (
    <View style={styles.container}>
      <Image source={walledLogo} style={styles.imageLogo} />
      <View style={styles.formContainer}>
        <View style={styles.inputTextContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.button}>
          {loading ? (
            <ActivityIndicator size="large" color="#19918F" />
          ) : (
            <ButtonText label="Login" onPress={onLogin} />
          )}
        </View>

        <View style={styles.registerLink}>
          <Text style={{ fontSize: 18 }}>Don't have account? </Text>
          <Link href={"/(auth)/register"}>
            <Text style={{ color: "#19918F", fontSize: 18 }}>Register here</Text>
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
    padding: 10,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});
