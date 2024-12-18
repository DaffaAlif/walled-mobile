import { StyleSheet, Text, View, Alert } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import AmountInput from "@/components/SharedComponents/AmountInput";
import Notesinput from "@/components/SharedComponents/NotesInput";
import AccountNoInput from "@/components/SharedComponents/AccountNoInput";

import ButtonText from "@/components/SharedComponents/ButtonText";
import { router } from "expo-router";
import { transfer, currentUser } from "@/api/api";
import { useSession } from "@/context/authContext";

const TransferPage = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [accountNo, setAccountNo] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const { session } = useSession();

  const fetchUser = async () => {
    if (session) {
      try {
        const response = await currentUser(String(session));
        const data = response;
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      // Ensure all fields are filled
      if (!amount || !accountNo || !notes) {
        Alert.alert("Error", "All fields must be filled");
        return;
      }

      // Call the top-up API
      const result = await transfer(
        String(session),
        String(amount),
        String(userData?.user_id),
        String(accountNo),
        String(notes)
      );

      // If successful, clear all state values and navigate
      if (result) {
        setAmount("");
        setSelectedValue("");
        setNotes("");
        Alert.alert("Success", "Transfer successful!");
        router.replace("/");
      }
    } catch (err) {
      console.error("Transfer error:", err);
      Alert.alert("Error", "An error occurred while processing the transfer");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session]);

  return (
    <View style={styles.container}>
      <View>
        <AccountNoInput accountNo={accountNo} setAccountNo={setAccountNo}/>
        <AmountInput showBalance={true} amount={amount} setAmount={setAmount} userBalance={userData?.balance}/>
        <Notesinput notes={notes} setNotes={setNotes} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonText
          label="Transfer"
          onPress={handleSubmit}
          
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
