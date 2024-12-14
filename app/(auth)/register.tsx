import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterForm from '@/components/Register/RegisterForm'

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <RegisterForm/>
    </View>
  )
}

export default RegisterPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
