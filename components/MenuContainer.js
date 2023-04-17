import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({title, imageSrc, type, setType, titleText}) => {

  const handlePress = () => {
    setType(title.toLowerCase())  
      
  }
  return (
    <TouchableOpacity 
    onPress={handlePress}
    className="items-center justify-between space-y-2 p-2">
      <View className={ `w-20 h-20 shadow-sm rounded-full ${type === title.toLowerCase() ? 'bg-gray-200':''}`}>
        <Image source={imageSrc} className="w-full h-full object-contain"/>
      </View>
      <Text className="text-[#00BCC9] text-sm font-semibold">{titleText}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer