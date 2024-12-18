import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import UserGreeting from "@/components/Home/UserGreeting";
import UserAccountNo from "@/components/Home/UserAccountNo";
import UserBalance from "@/components/Home/UserBalance";
import TransactionTable from "@/components/Home/TransactionTable";
import PressableCard from "@/components/SharedComponents/PressableCard";
import { currentUser, userTransaction } from "@/api/api";
import { useSession } from "@/context/authContext";
import { useRouter } from "expo-router";

type UserData = {
  email: string;
  fullname: string;
  password: string;
  phone_no: string;
  username: string;
};

type TransactionData = {
  id: string;
  userDataTo: UserData;
  userDataFrom: UserData;
  type: string;
  amount: string;
  from_user: string;
  to_user: string;
  notes: string;
};

const index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [userData, setUserData] = useState<UserData | null>(null);
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const { session } = useSession();

  const router = useRouter()

  const [loading, setLoading] = useState(true);

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

  const fetchTransactionData = async () => {
    if (session) {
      try {
        const response = await userTransaction(String(session)); // Assuming userTransaction fetches transactions
        setTransactions(response.result); // Assuming response is an array of transactions
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    }
  };

  useEffect(() => {
  
    fetchUser();
    fetchTransactionData();
  }, [session]);

  return (
    <View>
      <UserGreeting userData={userData}/>
      <UserAccountNo userData={userData}/>
      <UserBalance userData={userData}/>
      {/* <PressableCard/> */}
      <TransactionTable transactions={transactions}/>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
