import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserGreeting from '@/components/Home/UserGreeting'
import UserAccountNo from '@/components/Home/UserAccountNo'
import UserBalance from '@/components/Home/UserBalance'
import TransactionTable from '@/components/Home/TransactionTable'

const index = () => {
  return (
    <View>
      <UserGreeting />
      <UserAccountNo/>
      <UserBalance/>
      <TransactionTable/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})