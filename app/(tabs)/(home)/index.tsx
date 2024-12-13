import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserGreeting from '@/components/UserGreeting'
import UserAccountNo from '@/components/UserAccountNo'
import UserBalance from '@/components/UserBalance'
import TransactionTable from '@/components/TransactionTable'

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