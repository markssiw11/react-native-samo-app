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
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {SignUp} from '../../screens';

import Tabs from '../../navigation/tabs';
import {COLORS, icons, DARK_THEME, DEFAULT_THEME} from '../../constants';

const TabScreen = ({isDarkMode}) => {
  return (
    <NavigationContainer theme={isDarkMode ? DARK_THEME : DEFAULT_THEME}>
      <Tabs />
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  isDarkMode: state?.settings.isDarkMode,
});
export default connect(mapStateToProps)(TabScreen);
