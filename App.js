/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {connect, Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {I18nextProvider} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';

import configureStore from './redux/configureStore';

import Tabs from './navigation/tabs';
import {COLORS, icons, DARK_THEME, DEFAULT_THEME} from './constants';
import i18n, {i18nInit} from './i18n';
import NavigateScreen from './screens/navigation';
const Stack = createStackNavigator();
const {persistor, store} = configureStore();

// const NavigateScreen = () => {
//   return (
//     <NavigationContainer theme={DEFAULT_THEME}>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//         initialRouteName={'Home'}>
//         <Stack.Screen name="SignUp" component={SignUp} />

//         {/* Tabs */}
//         <Stack.Screen name="Home" component={Tabs} />

//         {/* <Stack.Screen name="Scan" component={Scan} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const RenderContent = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigateScreen />
    </I18nextProvider>
  );
};
const onBeforeLift = async () => {
  await i18nInit();
};
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<ActivityIndicator />}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <RenderContent />
      </PersistGate>
    </Provider>
  );
};

export default App;
