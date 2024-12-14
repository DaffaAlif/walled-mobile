import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FormatRupiah } from "@arismun/format-rupiah";
const TransactionTable = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 700, fontSize: 16 }}>Transaction History</Text>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ccc",
          marginVertical: 8,
        }}
      />
      <FlatList
        data={[
          {
            name: "Adityo Gizwanda",
            type: "Transfer",
            date: "08 December 2024",
            amount: "75000",
          },
          {
            name: "Adityo Gizwanda",
            type: "Top Up",
            date: "08 December 2024",
            amount: "75000",
          },
          {
            name: "Adityo Gizwanda",
            type: "Top Up",
            date: "08 December 2024",
            amount: "75000",
          },
          {
            name: "Adityo Gizwanda",
            type: "Transfer",
            date: "08 December 2024",
            amount: "75000",
          },
          {
            name: "Adityo Gizwanda",
            type: "Transfer",
            date: "08 December 2024",
            amount: "75000",
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemProfileContainer}>
              <View style={styles.itemProfilePicture} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 400 }}>
                  {item?.name}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 400 }}>
                  {item?.type}
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: 400, color: "#939393" }}
                >
                  {item?.date}
                </Text>
              </View>
            </View>
            <View style={styles.amount}>
              <Text
                style={{
                  fontSize: 20,
                  color: `${item.type == "Transfer" ? "red" : "green"}`,
                }}
              >
                {item.type == "Transfer" ? "- " : "+ "}
                <FormatRupiah value={parseFloat(item?.amount)} />
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TransactionTable;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    maxHeight: 300,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  itemProfilePicture: {
    borderRadius: 100,
    width: 50,
    height: 50,
    backgroundColor: "#D9D9D9",
  },
  itemProfileContainer: {
    marginLeft: 2,
    flexDirection: "row",
  },
  amount: {
    alignSelf: "center",
  },
});
