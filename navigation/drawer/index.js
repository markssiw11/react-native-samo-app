import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import DrawerContent from './content';
import Tabs from '../tab';
import {COLORS, SIZES} from '../../constants';
function MainDrawer(props) {
  const stylesDrawer = {
    marginVertical: 50,
    borderRadius: 20,
    // marginHorizontal: 10,
    width: (SIZES.width * 3) / 4,
    backgroundColor: COLORS.white,
  };
  return (
    <Drawer.Navigator
      screenOptions={{}}
      drawerContentOptions={
        {
          // contentContainerStyle: {width: 230, backgroundColor},
        }
      }
      drawerStyle={stylesDrawer}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
}

export default MainDrawer;
