import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const ItemCardContainer = ({imageSrc, title, location, data}) => {

  const navigation = useNavigation()
  return (
   
      <TouchableOpacity className="rounded-md border border-gray-300 px-3 py-2 shadow-md space-y-2 bg-white w-[152px] my-2"
      onPress={()=>navigation.navigate('Detail',{param:data})}
      >
        <Image
        className="w-full h-40 rounded-md object-contain"
        source={{ uri:imageSrc }}
        title={title}
        location={location}
        
        />
        <Text className="text-[#428288] font-bold text-[12px}">
          {title?.length>14 ? `${title.slice(0,14)}...` : title}
        </Text>
        <View className="flex-row items-center justify-start">
          <FontAwesome name="map-marker" size={18} color="gray"/>
        <Text className="text-[#428288] font-bold ml-3 text-xs">
          {location?.length>18 ? `${location.slice(0,18)}...` : location}
        </Text>
        </View>        
      </TouchableOpacity>
    
  )
}

export default ItemCardContainer