import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import UserGreeting from "@/components/Home/UserGreeting";
import UserAccountNo from "@/components/Home/UserAccountNo";
import UserBalance from "@/components/Home/UserBalance";
import TransactionTable from "@/components/Home/TransactionTable";
import PressableCard from "@/components/SharedComponents/PressableCard";
import { fetch } from "expo/fetch";



const index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataUser = async () => {
    try {
      const response = await fetch("http://192.168.1.9:3000/users");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  return (
    <View>
      <UserGreeting />
      <UserAccountNo />
      <UserBalance />
      {/* <PressableCard/> */}
      <TransactionTable />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
