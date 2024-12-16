import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AmountInput from "@/components/SharedComponents/AmountInput";
import Notesinput from "@/components/SharedComponents/NotesInput";
import AccountNoInput from "@/components/SharedComponents/AccountNoInput";

import ButtonText from "@/components/SharedComponents/ButtonText";
import { router } from "expo-router";

const TransferPage = () => {
  return (
    <View style={styles.container}>
      <View>
        <AccountNoInput />
        <AmountInput showBalance={true} />
        <Notesinput />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonText
          label="Transfer"
          onPress={() =>
            router.replace("/(tabs)/(transaction)/transfer/success/2")
          }
        />
      </View>
    </View>
  );
};

export default TransferPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  buttonContainer: {
    flex: 1 / 4,
    padding: 10,
  },
});
