import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../constants';
class Main extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={[styles.ctn]}>
        <HeaderMain onPress={() => onPressNav(navigation)} />
      </View>
    );
  }
}
const onPressNav = (navigation) => {
  navigation.openDrawer();
};
function MainScreen({navigation}) {
  return (
    <View style={[styles.ctn]}>
      <HeaderMain onPress={onPressNav} />
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

export default Main;
