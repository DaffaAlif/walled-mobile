import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import AmountInput from "@/components/SharedComponents/AmountInput";
import Notesinput from "@/components/SharedComponents/NotesInput";
import DropdownPicker from "@/components/SharedComponents/DropdownPicker";
import ButtonText from "@/components/SharedComponents/ButtonText";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { topup, currentUser } from "@/api/api";
import { useSession } from "@/context/authContext";

const TopUpPage = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
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
      if (!amount || !selectedValue || !notes) {
        Alert.alert("Error", "All fields must be filled");
        return;
      }

      // Call the top-up API
      const result = await topup(
        String(session),
        String(amount),
        String(selectedValue),
        String(userData?.user_id),
        String(notes)
      );

      // If successful, clear all state values and navigate
      if (result) {
        setAmount("");
        setSelectedValue("");
        setNotes("");
        Alert.alert("Success", "Top-up successful!");
        router.replace("/");
     
      }
    } catch (err) {
      console.error("Top-up error:", err);
      Alert.alert("Error", "An error occurred while processing the top-up");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [session]);

  return (
    <View style={styles.container}>
      <View>
        <AmountInput
          showBalance={false}
          amount={amount}
          setAmount={setAmount}
        />
        <DropdownPicker
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <Notesinput notes={notes} setNotes={setNotes} />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonText label="Top Up" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default TopUpPage;

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
