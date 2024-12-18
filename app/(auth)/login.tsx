import { StyleSheet, Text, View, Alert } from "react-native";
import LoginForm from "@/components/Login/LoginForm";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useSession } from "@/context/authContext";

import React from "react";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(""); // State for error handling
  const router = useRouter(); // Router for navigation
  const { signIn } = useSession();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await signIn(email, password);
      console.log("Login successful:", response);

      Alert.alert("Success", "You have successfully logged in!");
      router.push("/"); // Navigate to the home page or desired screen
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
      Alert.alert("Error", err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        loading={loading}
        error={error}
        onLogin={handleLogin}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
