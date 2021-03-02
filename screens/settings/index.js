/*
 @settings
*/

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import {COLORS} from '../../constants';
import * as TextAction from '../../redux/actions/auth';
import {connect, useDispatch} from 'react-redux';

function SettingsScreen() {
  const dispatch = useDispatch();
  const [isDarkMode, setMode] = useState(false);
  const toggleSwitch = () => {
    setMode((previousState) => !previousState);
    dispatch(TextAction.testReducers('1234567890'));
  };
  return (
    <View style={styles.ctn}>
      <Switch
        trackColor={{false: '#767577', true: COLORS.darkTurquoise}}
        thumbColor={isDarkMode ? COLORS.white : COLORS.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.darkTurquoise,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default SettingsScreen;
