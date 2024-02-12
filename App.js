import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from './src/components/NavBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='NavBar'
        component={NavBar}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})