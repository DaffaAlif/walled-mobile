import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AmountInput from "@/components/AmountInput";
import Notesinput from "@/components/NotesInput";
import DropdownPicker from "@/components/DropdownPicker";
import ButtonText from "@/components/ButtonText";

const TopUpPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <AmountInput  showBalance={false}/>
        <DropdownPicker />
        <Notesinput />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonText label="Top Up"/>
      </View>
    </View>
  );
};

export default TopUpPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex:1
  },
  buttonContainer: {
    flex: 1/4,
    padding:10
  },
});
