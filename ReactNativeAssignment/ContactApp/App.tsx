/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View } from 'react-native';
import AddContact from './componenets/AddContact';
import ContactList from './componenets/ContactList';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Collapse } from '@mui/material';
import UpdateContact from './componenets/updateContact';
// 1. import `NextUIProvider` component
// Stack Constant for implementing Stack Navigator
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
    }}>
        <Stack.Screen name="ContactApp"  
        options={{
           title:"Home"
       }}
      
        component={ContactList}
       />
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="UpdateContact" component={UpdateContact} />

      </Stack.Navigator>
  </NavigationContainer>
  
  

  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default ()=>(
    <App/>
  
);
