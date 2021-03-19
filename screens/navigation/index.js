/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

// import Tabs from '../../navigation/tab';
import Drawers from '../../navigation/drawer';
import {DARK_THEME, DEFAULT_THEME} from '../../constants';

const NavigationScreen = ({isDarkMode}) => {
  return (
    <NavigationContainer theme={isDarkMode ? DARK_THEME : DEFAULT_THEME}>
      <Drawers />
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  isDarkMode: state?.settings.isDarkMode,
});
export default connect(mapStateToProps)(NavigationScreen);
