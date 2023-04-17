import React, { useLayoutEffect, useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MenuContainer from '../components/MenuContainer'
import {FontAwesome} from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer'
import { getPlaceData } from '../api'

const Discover = () => {
  const navigation = useNavigation()

  const [type, setType] = useState('restaurants')
  const [isLoading, setIsLoading] = useState(false)
  const [mainData, setMainData]=useState([])
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getPlaceData(bl_lat, bl_lng, tr_lat, tr_lng, type).then(data => {
      setMainData(data)
      setInterval(() => {
        setIsLoading(false)
      },200)
    })

  },[type])

  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      <View className='flex-row justify-between items-center px-8'>
        <View>
          <Text className='text-[24px] text-[#0B6468] font-bold'>Descubre</Text>
          <Text className='text-[20px] text-[#527283]'>
            Las bellezas de hoy
          </Text>
        </View>
        <View className='w-12 h-12 bg-gray-400 justify-center items-center rounded-md shadow-lg'>
          <Image
            source={Avatar}
            className='w-12 h-12 object-cover rounded-md'
          />
        </View>
      </View>
      <View className='flex-row items-center py-1 px-4 bg-white mx-4 rounded-md shadow-lg mt-4'>
        
      </View>

      {isLoading 
      ? 
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size={30} color="red"/> 
      </View>
      :  <ScrollView>
        <View className='flex-row items-center justify-center px-8 mt-8'>
          <MenuContainer
            key='hotel'
            titleText='Hoteles'
            title='hotels'
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key='atraccion'
            titleText='Atracciones'
            title='attractions'
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key='restaurant'
            titleText='Restaurantes'
            title='restaurants'
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

        <View>
          <View className='flex-row items-center justify-between px-4 py-8'>
            <Text className='text-[#2C7379] font-bold text-[20px]'>Recomendaciones</Text>
            <TouchableOpacity className='flex-row items-center justify-center space-x-2'>
              <Text >Explorar</Text>
              <FontAwesome name='long-arrow-right' size={24} color="#A0C4C7"/>
            </TouchableOpacity>
          </View>
        </View>
        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
        {mainData?.length > 0 ?
        <>
        {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
        </>
        :<>
        <View className='flex-1 w-full h-full items-center justify-center'>
          <Image source={NotFound}
          className="w-32 h-32 object-cover"
          />
          <Text className='text-gray-500 text-2xl my-3'>No hay Datos Disponibles...</Text>
        </View>
        </>}
        </View>
      </ScrollView>}
    </SafeAreaView>
  )
}

export default Discover
