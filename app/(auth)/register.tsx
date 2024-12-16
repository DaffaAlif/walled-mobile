import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RegisterForm from "@/components/Register/RegisterForm";

const RegisterPage = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <RegisterForm isChecked={isChecked} setIsChecked={setIsChecked}/>
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
