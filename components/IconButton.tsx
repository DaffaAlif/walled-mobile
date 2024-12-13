import { StyleSheet, Text, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
 
import React from "react";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress?: () => void;
  };

  const IconButton = ({ icon, label, onPress }: Props) => {
    return (
      <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color={'#fff'} />
      
      </Pressable>
    );
  };
  
  export default IconButton;
  
  const styles = StyleSheet.create({
      iconButton:{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#19918F',
          padding:10,
          borderRadius:10,
          margin:4,
          shadowRadius:2
      },
   
  });
  
