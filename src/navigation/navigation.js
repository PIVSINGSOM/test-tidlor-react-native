import React from 'react';

import HomeScreen from '../screen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FormmScreen from '../screen/FormmScreen';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FormmScreen" component={FormmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
