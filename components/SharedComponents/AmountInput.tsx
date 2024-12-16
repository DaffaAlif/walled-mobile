import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

type Props = {
  showBalance: boolean;
};

const AmountInput = ({ showBalance }: Props) => {
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

          //   onChangeText={text => onChangeText(text)}
          //   value={value}
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
          <Text style={{ color: "#19918F" }}>IDR 10.000.000</Text>
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
