import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";

type Props = {
    label : string
    onPress : () => void
}

const ButtonText = ({label, onPress} : Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
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
