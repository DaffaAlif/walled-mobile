import { Pressable, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { router } from "expo-router";

const TopUpLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <View style={styles.container}>
              <Pressable style={{width:30}} onPress={()=> router.replace('/(tabs)/(home)')}>
                <Ionicons name="arrow-back" size={20}/>
              </Pressable>
              <Text style={{ fontWeight: "bold", fontSize:20 }}>Top Up</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen name="success/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TopUpLayout;

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    alignItems:'center',
    padding:10
  }
});
