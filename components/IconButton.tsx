import { StyleSheet, Text, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { RelativePathString } from "expo-router";
import { Link } from "expo-router";

import React from "react";

type Props = {
  hrefURL : RelativePathString 
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress?: () => void;
};

const IconButton = ({hrefURL, icon, label, onPress }: Props) => {
  return (
    <Link href={hrefURL} asChild style={{margin:4}}>
      <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color={"#fff"} />
      </Pressable>
    </Link>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#19918F",
    padding: 10,
    borderRadius: 10,
  
  },
});
