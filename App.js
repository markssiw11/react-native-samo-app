/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import configureStore from './redux/configureStore';

import {SignUp} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Tabs from './navigation/tabs';
import {COLORS, icons, DARK_THEME, DEFAULT_THEME} from './constants';

const Stack = createStackNavigator();
const {persistor, store} = configureStore();

const NavigateScreen = () => {
  return (
    <NavigationContainer theme={DEFAULT_THEME}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'SignUp'}>
        <Stack.Screen name="SignUp" component={SignUp} />

        {/* Tabs */}
        <Stack.Screen name="Home" component={Tabs} />

        {/* <Stack.Screen name="Scan" component={Scan} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator />}
        // onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <NavigateScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
