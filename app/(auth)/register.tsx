import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RegisterForm from "@/components/Register/RegisterForm";
import { register } from "@/api/api";
import { useRouter } from "expo-router"; // Import the router hook


const RegisterPage = () => {
  const router = useRouter()
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await register(email, password, fullname, phoneNo);
      console.log("Register successful:", data);
      alert("Registration successful! You can now log in.");
      router.replace('/(auth)/login')
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <RegisterForm
        fullname={fullname}
        setFullname={setFullname}
        phoneNo={phoneNo}
        setPhoneNo={setPhoneNo}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        onRegister={handleRegister}
      />
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
