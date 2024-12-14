import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AmountInput from "@/components/SharedComponents/AmountInput";
import Notesinput from "@/components/SharedComponents/NotesInput";
import DropdownPicker from "@/components/SharedComponents/DropdownPicker";
import ButtonText from "@/components/SharedComponents/ButtonText";

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
