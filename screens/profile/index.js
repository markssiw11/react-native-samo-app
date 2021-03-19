import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES, FONTS, STYLES} from '../../constants';

function ProfileScreen(params) {
  return (
    <SafeAreaView style={styles.ctn}>
      <View style={styles.avatarCtn}>
        <View style={styles.circle}>
          <FontAwesome5Icon
            name="image"
            color={COLORS.darkTurquoise}
            size={SIZE_ICON / 3}
          />
        </View>
        <Text
          style={[
            FONTS.body5,
            {color: COLORS.darkTurquoise, marginTop: SIZES.padding},
          ]}>
          change avatar
        </Text>
        <View style={{marginTop: SIZES.top}}>
          <BaseText icon="user" value="Nguyễn Văn Long" title="Họ Và Tên" />
          <BaseText icon="phone" value="0934172647" title="Số Điện Thoại" />
        </View>
      </View>
    </SafeAreaView>
  );
}
const SIZE_ICON = 75;

function BaseText({icon, value, title}) {
  return (
    <View style={styles.inputCtn}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.txtInputCtn}>
        {/* <FontAwesome5Icon
          name={icon}
          size={SIZES.body4}
          style={styles.icon}
          color={COLORS.mintcream}
        /> */}
        <TextInput value={value} style={styles.txtInput} autoCorrect={false} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ctn: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  avatarCtn: {
    alignItems: 'center',
    marginTop: SIZES.top,
  },
  circle: {
    width: SIZE_ICON,
    height: SIZE_ICON,
    borderRadius: SIZE_ICON / 2,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.darkTurquoise,
  },
  txtInputCtn: {
    width: SIZES.width - SIZES.padding * 4,
    marginHorizontal: SIZES.padding * 4,
    borderWidth: 1,
    borderColor: COLORS.darkgray,
    borderRadius: SIZES.border,
    flexDirection: 'row',
  },
  txtInput: {
    paddingVertical: SIZES.padding2,
    marginLeft: SIZES.padding,
    ...FONTS.txt5,
    flex: 1,
    color: 'black',
  },
  icon: {
    alignSelf: 'center',
    paddingHorizontal: SIZES.padding,
  },
  inputCtn: {
    marginHorizontal: SIZES.padding * 4,
    marginVertical: SIZES.padding,
  },
  headerTitle: {
    marginHorizontal: SIZES.padding * 4,
    paddingVertical: 3,
    ...FONTS.body5,
  },
});
export default ProfileScreen;
