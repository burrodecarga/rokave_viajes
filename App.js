import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';
// import { NativeWindStyleSheet } from 'nativewind'

// NativeWindStyleSheet.setOutput({
//   default: 'native',
// })

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Discover' component={Discover} />
        <Stack.Screen name='Detail' component={ItemScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
