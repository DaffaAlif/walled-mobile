import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SuccessCard from '@/components/SharedComponents/SuccessCard'

const TopupSuccessPage = () => {
  return (
    <View style={styles.container}>
     <SuccessCard/>
    </View>
  )
}

export default TopupSuccessPage

const styles = StyleSheet.create({container : {
    justifyContent:'center',
    alignItems:'center',
    flex:1
}})