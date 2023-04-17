import React, { useLayoutEffect } from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'
import * as Animatable from 'react-native-animatable';
 

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      {/*primera sección */}
      <View className='flex-row px-6 mt-8 items-center space-x-2'>
        <View className='w-16 h-16 bg-black rounded-full items-center justify-center'>
          <Text className='text-[#00BCC9] font-semibold'>Rokave</Text>
        </View>
        <Text className='text-[#2A2b4B] text-xl font-semibold'>Viajeros</Text>
      </View>
      {/*       segunda sección */}
      <View className='px-6 mt-4 space-y-1'>
        <Text className='text-[#3C6072] text-[32px]'>Disfrute Viajando</Text>
        <Text className='text-[#00BCC9] text-[28px] font-bold'>
          Momentos Rokave
        </Text>
        <Text className='text-justify text-gray-500'>
          Cada país, cada destino tiene algo para todos los gustos, ríos,
          playas, montañas, cuevas, ruinas antiguas y modernidades. Con
          <Text className='text-[#00BCC9] font-bold'> Rokave Viajes </Text> te
          mostramos cómo puedes visitar y disfrutar de cada país que visites con
          un presupuesto ajustado y sin renunciar a la comodidad.
        </Text>
      </View>

      {/* sección de círculos */}

      <View className='w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-0 -right-36'></View>
      <View className='w-[350px] h-[350px] bg-[#E99265] rounded-full absolute -bottom-36 -left-36'></View>

      {/* imagen */}

      <View className='flex-1 relative justify-center items-center'>
        <View className='w-3/4 h-full'>
          <Animatable.Image
           animation="fadeIn"
           easing="ease-in-out"

            className='w-full h-full object-cover mt-5'
            source={HeroImage}
          />
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Discover')}
        className='absolute p-1 rounded-3xl w-31 h-31 bottom-7 border-l-2 border-r-2 border-t-4 border-[#00BCC9] items-center justify-center'>
          <Animatable.View 
          animation={"pulse"}
          easing="ease-in-out"
          interationCount={"infinite"}
          className='w-20 h-20 rounded-full items-center justify-center bg-[#00BCC9] opacity-70'>
            <Text className='text-[#073952] font-bold'>Rokave</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
