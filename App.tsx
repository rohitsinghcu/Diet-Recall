import React from 'react'
import FoodRecallDetails from './src/screens/FoodScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WorkOutMealDetails from './src/screens/WorkOutScreen';
import { Alert, Appearance, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';


const Stack = createNativeStackNavigator();

const getScreenOptions = (title: string): NativeStackNavigationOptions => {
  return {
    title: title,
    headerTitleAlign: 'center',
    headerRight: () => (
      <TouchableOpacity onPress={() => Alert.alert('Contact Us', 'Thank you for contacting us. Our support will reach you in 24 hours.')}>
        <Icon name="customerservice" size={20} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default function App() {
  React.useEffect(() => {
    Appearance.setColorScheme('light');
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="FoodDetails"
          component={FoodRecallDetails}
          options={() => getScreenOptions('Food Recall Details')}
        />
        <Stack.Screen
          name="WorkOutDetails"
          component={WorkOutMealDetails}
          options={() => getScreenOptions('Workout Meal Details')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}