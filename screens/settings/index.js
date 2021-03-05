/*
 @settings
*/

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {COLORS, SIZES} from '../../constants';
import * as SettingsAction from '../../redux/actions/settings';
import {connect, useDispatch} from 'react-redux';
import {t} from '../../i18n';
function SettingsScreen({isDarkMode}) {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    dispatch(SettingsAction.changeMode(!isDarkMode));
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
      <Text style={{color: colors.text}}>{t('signIn')}</Text>
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
const mapStateToProps = (state) => ({
  isDarkMode: state?.settings?.isDarkMode,
});
export default connect(mapStateToProps)(SettingsScreen);
