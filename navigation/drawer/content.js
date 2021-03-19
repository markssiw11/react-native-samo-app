import React from 'react';

import {View, Text, StyleSheet, Switch} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {COLORS, FONTS, SIZES} from '../../constants';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {connect, useDispatch} from 'react-redux';

import * as SettingsAction from '../../redux/actions/settings';
import {t} from '../../i18n/index';
function DrawerContent(props) {
  const {isDarkMode, navigation} = props;
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    dispatch(SettingsAction.changeMode(!isDarkMode));
  };
  const navToScreen = (nav) => {
    navigation.navigate(nav);
  };
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: SIZES.padding,
      }}>
      <View style={styles.infoCtn}>
        <View style={styles.avatar} />
        <View style={styles.userCtn}>
          <Text style={styles.infoTxt}>Nguyen Van Long</Text>
          <View style={{flexDirection: 'row'}}>
            <FontAwesome5Icon
              name="phone"
              size={SIZES.body5}
              style={{top: 5}}
              color={COLORS.info}
            />
            <Text style={{...FONTS.body5, marginLeft: 10, color: COLORS.info}}>
              09341278882
            </Text>
          </View>
        </View>
      </View>

      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label={t('personalData')}
          onPress={() => navToScreen('User')}
          style={{backgroundColor: '#EBF2FA', marginLeft: SIZES.padding}}
          icon={() => (
            <FontAwesome5Icon
              name="user"
              solid
              style={{marginLeft: SIZES.padding}}
              size={SIZES.body5}
              color={COLORS.info}
            />
          )}
        />
        <DrawerItem
          label={t('settings')}
          style={{backgroundColor: '#EBF2FA', marginLeft: SIZES.padding}}
          icon={() => (
            <FontAwesome5Icon
              name="cog"
              solid
              style={{marginLeft: SIZES.padding}}
              size={SIZES.body5}
              color={COLORS.info}
            />
          )}
        />
      </DrawerContentScrollView>
      <Switch
        trackColor={{false: '#767577', true: COLORS.darkTurquoise}}
        thumbColor={isDarkMode ? COLORS.white : COLORS.white}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isDarkMode}
        style={{marginHorizontal: SIZES.padding, marginVertical: SIZES.padding}}
      />
      <BaseText icon={'sign-out-alt'} title={t('signOut')} />
    </View>
  );
}

function BaseText({icon, title}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <FontAwesome5Icon
        name={icon}
        size={SIZES.body1}
        color={COLORS.boldGrey}
        style={{marginBottom: SIZES.bottom, marginLeft: SIZES.padding}}
      />
      <Text style={styles.baseTxt}>{title}</Text>
    </View>
  );
}

const SIZE = 70;
const styles = StyleSheet.create({
  avatar: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLORS.darkgray,
    marginLeft: SIZES.padding,
  },
  infoCtn: {
    flexDirection: 'row',
    marginTop: 50,
  },
  userCtn: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  infoTxt: {
    // fontSize: SIZES.font,
    ...FONTS.h4,
  },
  baseTxt: {
    ...FONTS.h4,
    top: 3,
    marginLeft: 10,
  },
});
const mapStateToProps = (state) => ({
  isDarkMode: state?.settings?.isDarkMode,
});
export default connect(mapStateToProps)(DrawerContent);
