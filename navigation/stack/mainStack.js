/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerScreen from '../../navigation/drawer';
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={'drawerHome'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="drawerHome" component={DrawerScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
