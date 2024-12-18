import { StyleSheet, Text, View, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

type Props = {
  notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
};

const Notesinput = ({ notes, setNotes }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 400, color: "#B3B3B3" }}>
        Notes
      </Text>
      <View style={styles.amountInputContainer}>
        <TextInput
          editable
          style={{ flex: 1, fontSize: 16 }}
          inputMode="text"
          value={notes}
          onChangeText={setNotes}
        />
      </View>

      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ccc",
          marginVertical: 8,
        }}
      />
    </View>
  );
};

export default Notesinput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginVertical: 5,
    padding: 20,
  },
  amountInputContainer: {
    flexDirection: "row",
  },
});
