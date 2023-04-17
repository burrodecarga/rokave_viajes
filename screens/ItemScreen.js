import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const ItemScreen = ({ route }) => {
  const navigation = useNavigation()
  const data = route?.params?.param

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      <ScrollView className='flex-1 px-4 py-6'>
        <View className='flex-1 bg-white shadow-lg'>
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : 'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg',
            }}
            className='w-full h-72 object-cover rounded-2xl'
          />
          <View className='absolute flex-row justify-between items-center px-6 inset-x-0 top-5'>
            <TouchableOpacity
              className='w-10 h-10 justify-center items-center rounded-md bg-white'
              onPress={() => navigation.navigate('Discover')}
            >
              <FontAwesome name='chevron-left' size={20} color='#06B2BE' />
            </TouchableOpacity>
            <TouchableOpacity className='w-10 h-10 justify-center items-center rounded-md bg-[#06B2BE]'>
              <FontAwesome name='heartbeat' size={20} color='white' />
            </TouchableOpacity>
          </View>
          <View className='absolute flex-row justify-between items-center px-6 inset-x-0 bottom-5'>
            <View className='flex-row space-x-2 items-center'>
              <Text className='text-[8px] font-bold text-gray-50'>
                {data?.price_level}
              </Text>
              <Text className='text-[14px] font-bold text-gray-50'>
                {data?.price}
              </Text>
            </View>
            <View className='px-2 py-1 bg-teal-100 rounded-lg'>
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>
        <View className='mt-6'>
          <Text className='text-[#428288] font-bold text-[18px]'>
            {data?.name}
          </Text>
          <View className='flex-row items-center space-x-2'>
            <FontAwesome name='map-marker' size={20} color='#8C9EAC' />
            <Text className='text-[#8C9EA2] font-bold text-[14px]'>
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="star" size={20} color="#D58574" />
              </View>
              <View>
                <Text className="text-xs text-[#515151]">{data?.rating}</Text>
                <Text className="text-xs text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={20} color="black" />
              </View>
              <View>
                <Text className="text-xs text-[#515151]">{data?.price_level}</Text>
                <Text className="text-xs text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-10 h-10 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome5 name="map-signs" size={20} color="black" />
              </View>
              <View>
                <Text className="text-xs text-[#515151] capitalize">
                  {data?.bearing}
                </Text>
                <Text className="text-xs text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}
        </View>
        {data?.description && (<Text className="mt-4  tracking-wide font-semibold text-justify text-[14px] text-[#97A6AF]">{data.description}</Text>)}

        {data?.cuisine?.map((n)=>(
          <View className="flex-row items-center justify-center gap-2 flex-wrap mt-4">

          <TouchableOpacity
          className='px-2 py-1 rounded-md bg-emerald-100'
          key={n.key} 
          >
            <Text>{n.name}</Text>
          </TouchableOpacity>
          </View>
        ))}

        <View className="mt-2 bg-gray-100 space-y-2 rounded-md px-4 py-2">
            
              {
                data?.phone && (
                   <View className="flex-row items-center space-x-2"> 
                   <FontAwesome name='phone' size={20} color='#428288'/>
                   <Text className="text-sm text-slate-400 text-wrap">{data?.phone}</Text>
                  </View>
                )
              }

{
                data?.email && (
                   <View className="flex-row items-center space-x-2"> 
                   <FontAwesome name='envelope' size={20} color='#428288'/>
                   <Text className="text-sm text-slate-400 text-wrap">{data?.email}</Text>
                  </View>
                )
              }

{
                data?.address && (
                   <View className="flex-row items-center space-x-2"> 
                   <FontAwesome name='map-pin' size={20} color='#428288'/>
                   <Text className="text-sm text-slate-400 text-wrap">{data?.address}</Text>
                  </View>
                )
              }              
        </View>
        <View className="mt-4 px-4 py-4 w-full rounded-md bg-green-600 mb-12">
          <Text className="text-white text-[20px] text-center">Reservar</Text>
        </View>
        <View className="mb-48"/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen
 