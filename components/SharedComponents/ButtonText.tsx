import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

type Props = {
    label : string
}

const ButtonText = ({label} : Props) => {
  return (
    <Pressable style={styles.button}>
      <Text style={{textAlign:'center', color:'white', fontWeight:700, fontSize:16}}>{label}</Text>
    </Pressable>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#19918F",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
});
