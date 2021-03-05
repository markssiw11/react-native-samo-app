import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../constants';
function MainScreen(params) {
  return (
    <View style={[styles.ctn]}>
      <HeaderMain />
    </View>
  );
}

function HeaderMain({onPress}) {
  return (
    <View style={styles.headerCtn}>
      <FontIcon
        name="stream"
        size={20}
        color={COLORS.black}
        onPress={onPress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  ctn: {
    flex: 1,
  },
  headerCtn: {
    marginTop: 50,
    marginLeft: 20,
  },
});

export default MainScreen;
