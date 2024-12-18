import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

type Props = {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};

const DropdownPicker = ({ selectedValue, setSelectedValue }: Props) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="BYOND Pay" value="8261546573" />
        <Picker.Item label="Gopay" value="8698459525" />
        <Picker.Item label="OVO" value="5389763061" />
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
