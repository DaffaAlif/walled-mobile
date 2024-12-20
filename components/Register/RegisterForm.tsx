import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image, TextInput } from "react-native";
import { Link } from "expo-router";
import ButtonText from "../SharedComponents/ButtonText";
import Checkbox from "expo-checkbox";
import React from "react";

type Props = {
  fullname: string;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
  phoneNo: string;
  setPhoneNo: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  onRegister: () => void;
};

const RegisterForm = ({
  fullname,
  setFullname,
  phoneNo,
  setPhoneNo,
  email,
  setEmail,
  password,
  setPassword,
  isChecked,
  setIsChecked,
  onRegister,
}: Props) => {
  const walledLogo = require("@/assets/images/WalledLogo.png");
  return (
    <View style={styles.container}>
      <Image source={walledLogo} style={styles.imageLogo} />
      <View style={styles.formContainer}>
        <View style={styles.inputTextContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Fullname"
            value={fullname}
            onChangeText={setFullname}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.inputText}
            placeholder="Phone Number"
            value={phoneNo}
            onChangeText={setPhoneNo}
            secureTextEntry
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Checkbox value={isChecked} onValueChange={setIsChecked} />
          <Text style={{ marginLeft: 10 }}> I have read and agree to the</Text>
          <Link href="/(auth)/modal" style={{ color: "#19918F" }}>
            <Text style={{ color: "#19918F" }}> Terms and Condition</Text>
            <Text style={{ color: "red" }}>*</Text>
          </Link>
        </View>


          <TouchableOpacity style={styles.button} onPress={onRegister}>
            <Text>Register</Text>
          </TouchableOpacity>
  
        <View style={styles.registerLink}>
          <Text style={{ fontSize: 18 }}>Have account? </Text>
          <Link
            href={"/(auth)/login"}
            style={{ color: "#19918F", fontSize: 18 }}
          >
            <Text style={{ color: "#19918F", fontSize: 18 }}>Login here</Text>
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
    flex: 1,
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
  button: { marginTop: 30 },
  inputText: {
    backgroundColor: "#FAFBFD",
    borderRadius: 10,
    fontSize: 16,
    color: "black",
  },
});
