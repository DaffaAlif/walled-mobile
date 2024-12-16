
import { Stack, Tabs } from "expo-router";

import React from "react";

const TransactionLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
        
          
        }}
      />
    </Stack>
  );
};

export default TransactionLayout;
