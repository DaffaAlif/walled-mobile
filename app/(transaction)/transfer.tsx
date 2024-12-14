import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AmountInput from "@/components/AmountInput";
import Notesinput from "@/components/NotesInput";

import ButtonText from "@/components/ButtonText";

const TransferPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <AmountInput showBalance={true}/>
        <Notesinput />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonText label="Transfer"/>
      </View>
    </View>
  );
};

export default TransferPage;

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
