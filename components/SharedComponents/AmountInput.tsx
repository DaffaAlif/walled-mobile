import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

type Props = {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  showBalance: boolean;
  userBalance?: string;
};

const AmountInput = ({
  amount,
  setAmount,
  showBalance,
  userBalance,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 400, color: "#B3B3B3" }}>
        Amount
      </Text>
      <View style={styles.amountInputContainer}>
        <Text
          style={{ fontSize: 16, fontWeight: 400, flex: 1 / 7, marginTop: 15 }}
        >
          IDR
        </Text>
        <TextInput
          editable
          style={{ flex: 1, fontSize: 36 }}
          inputMode="numeric"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
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
      {showBalance ? (
        <View style={styles.balanceContainer}>
          <Text style={{ color: "#B3B3B3" }}>Balance</Text>
          <Text style={{ color: "#19918F" }}>IDR {userBalance}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default AmountInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginVertical: 30,
    padding: 20,
  },
  amountInputContainer: {
    flexDirection: "row",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
