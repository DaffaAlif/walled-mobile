import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

type Props = {
  accountNo: string;
  setAccountNo: React.Dispatch<React.SetStateAction<string>>;
};

const AccountNoInput = ({ accountNo, setAccountNo }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.amountInputContainer}>
        <Text
          style={{ fontSize: 16, fontWeight: 400, color: "#FFF", width: 30 }}
        >
          To :
        </Text>
        <TextInput
          editable
          style={{ flex: 1, color: "white" }}
          inputMode="numeric"
          placeholderTextColor="white"
          onChangeText={(text) => setAccountNo(text)}
          value={accountNo}
        />
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#FFF",
          marginVertical: 4,
        }}
      />
    </View>
  );
};

export default AccountNoInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#19918F",
    padding: 10,
  },
  amountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
