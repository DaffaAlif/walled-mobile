import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

const SuccessCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>
        <MaterialIcons name="check-circle" style={styles.checkIcon} size={63} />
        <Text style={{ color: "#2DC071", fontWeight: 700, fontSize: 30 }}>
          Transfer Success
        </Text>
      </View>
      <View style={styles.textContainer}>
        <View style={{ gap: 10 }}>
          <Text style={styles.text}>Amount</Text>
          <Text style={[styles.text,  { marginTop:25}]}>Transaction Id</Text>
          <Text style={styles.text}>From</Text>
          <Text style={styles.text}>To</Text>
          <Text style={styles.text}>Description</Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            gap: 10,
          
          }}
        >
          <Text style={[styles.text, {fontWeight:'bold', fontSize:30,  marginBottom:8}]}>1.000.000</Text>
          <Text style={styles.text}>338818239039011</Text>
          <Text style={styles.text}>11234001000</Text>
          <Text style={styles.text}>1234005001</Text>
          <Text style={[styles.text, { maxWidth: 150, textAlign: "right" }]}>
            Bayar hutang dan beli Bakso
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
   
        <Pressable style={styles.button}>
          <Text style={{color:"#23A6F0", textAlign:'center'}}>Print</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={{color:"#23A6F0", textAlign:'center'}}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SuccessCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
  },
  checkContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  checkIcon: {
    color: "#2DC071",
  },
  textContainer: {
    marginTop: 50,
    flexDirection: "row",
    gap: 50,
  },
  text: { fontSize: 18, color: "black" },
  buttonContainer: {flexDirection:"row", marginTop:30, justifyContent:'center', gap:20},
  button: {
    borderWidth: 1,
    borderColor: "#23A6F0",
    borderRadius:5,
    justifyContent:'center',
    width:120,
    padding:8
  },
});
