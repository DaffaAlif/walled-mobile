import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserGreeting = () => {
  const SunImage = require("@/assets/images/sun-greetings.png");
  return (
    <View style={styles.greetingContainer}>
      <View style={styles.textContainer}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Good Morning, Chelsea</Text>
        <Text style={{fontWeight:'ultralight', fontSize:16}}>Check all your incoming and outgoing transactions here</Text>
      </View>
      <Image source={SunImage} style={{width:80, height:80, marginLeft:10, marginTop:10}}/>
    </View>
  );
};

export default UserGreeting;

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    padding: 20,
    alignItems:'center',
    
  },
  textContainer: {
    width: 270,
    gap:10
  },
});
