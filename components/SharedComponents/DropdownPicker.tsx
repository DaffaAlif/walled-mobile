import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

const DropdownPicker = () => {
  return (
    <View style={styles.container}>
      <Picker>
        <Picker.Item label="BYOND Pay" value="BYOND Pay" />
        <Picker.Item label="Gopay" value="Gopay" />
        <Picker.Item label="OVO" value="OVO" />

      </Picker>
    </View>
  );
};

export default DropdownPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
    padding: 5,
  },
  amountInputContainer: {
    flexDirection: "row",
  },
});
