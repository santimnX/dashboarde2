import { View, Text } from 'react-native'
import React from 'react'

    interface CustomText{
        value:string;
        variant?:"normal " |"title"| "subtitle";
    }
const CustomText = () => {
  return (
    <View>
      <Text>CustomText</Text>
    </View>
  )
}

export default CustomText