/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import DrawerScreen from '../../navigation/drawer';
import TreeView from '../../screens/tree';
import NodeDetails from '../../screens/tree/details';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../constants';

const Stack = createStackNavigator();

function TreeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName={'TreeView'}
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen name="TreeView" component={TreeView} />

      <Stack.Screen
        name="NodeDetails"
        options={({route}) => {
          return {
            headerTitle: route?.params?.name,
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                labelVisible={false}
                backImage={() => (
                  <FontAwesome5Icon
                    name="chevron-left"
                    color={COLORS.black}
                    size={25}
                  />
                )}
                style={{marginLeft: 10}}
              />
            ),
          };
        }}
        component={NodeDetails}
      />
    </Stack.Navigator>
  );
}

export default TreeStack;
