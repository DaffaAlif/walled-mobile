import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "../IconButton";
import React from "react";

const UserBalance = () => {
  return (
    <View style={styles.greetingContainer}>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 400 }}>Balance</Text>
        <View style={styles.balanceText}>
          <Text style={{ fontSize: 24, fontWeight: 600 }}>Rp 10.000.000</Text>
          <Ionicons name="eye-outline" size={20} style={{ marginLeft: 8 }} />
        </View>
      </View>
      <View>
        <IconButton hrefURL={"../(transaction)/topup" } icon="add" label="" />
        <IconButton hrefURL="../(transaction)/transfer" icon="send" label=""/>
      </View>
    </View>
  );
};

export default UserBalance;

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    padding: 15,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  balanceText: {
    flexDirection: "row",
    alignItems: "center",
  },
});
