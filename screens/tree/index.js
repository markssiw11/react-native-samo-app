// React Native Tree View for Android and IOS devices
// https://aboutreact.com/react-native-final-tree-view/

// import React in our code
import React from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//import library for the TreeView
import TreeView from 'react-native-final-tree-view';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, FONTS, SIZES} from '../../constants';

//Dummy data for the Tree View
const state = {
  data: [
    {
      name: 'Nguyễn Văn Long',
      phoneNumber: '0564573847',
      idNumber: '191860601',
      commissionerId: '5d4538632245a100106d3a86',
      level: 0,
      position: 'ND',
      id: '5ee062802d371c0018516699',
      totalChildren: 3,
      isLastIndex: true,
      children: [
        {
          name: 'Vũ Canh Kỹ',
          phoneNumber: '0393604620',
          idNumber: '192764736',
          commissionerId: '5e69e69ba72d8f00183fb6f4',
          level: 5,
          position: 'SM',
          parentNode: '[object Object]',
          ancestorNodes: ['5ee062802d371c0018516699'],
          id: '5ee06290dd87710011b90d43',
          totalChildren: 0,
          isMe: true,
          isLastIndex: false,
          children: [],
          isSameLevel: true,
        },
        {
          name: 'ĐINH THỊ HƯƠNG (Đồng cấp)',
          phoneNumber: '0389325646',
          idNumber: '113609009',
          commissionerId: '5d6f573111505e00199524ed',
          level: 5,
          position: 'SM',
          parentNode: '5ee06290dd87710011b90d43',
          ancestorNodes: [
            '5ee06290dd87710011b90d43',
            '5ee062802d371c0018516699',
          ],
          id: '5f718ab90869c200187cf1ec',
          totalChildren: 0,
          isLastIndex: false,
          children: [],
          isSameLevel: true,
        },
        {
          name: 'LÊ ÁNH HỒNG (Đồng cấp)',
          phoneNumber: '0354219993',
          idNumber: '113583541',
          commissionerId: '5d6f554311505e00199524e4',
          level: 5,
          position: 'SM',
          parentNode: '5ee06290dd87710011b90d43',
          ancestorNodes: [
            '5ee06290dd87710011b90d43',
            '5ee062802d371c0018516699',
          ],
          id: '5f7ae1cf0869c200187d003e',
          totalChildren: 0,
          isLastIndex: true,
          children: [],
          isSameLevel: true,
        },
      ],
      isParent: true,
    },
  ],
};

const onPressDetail = (navigation, params) => {
  navigation.navigate('NodeDetails', params);
};
const ChannelTreeView = ({navigation}) => {
  return (
    <ScrollView horizontal style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={{flex: 1, paddingTop: 40}}>
        <View style={{paddingBottom: 100}}>
          <TreeView
            data={state.data}
            getCollapsedNodeHeight={() => 60}
            renderNode={({node, level, isExpanded, hasChildrenNodes}) => {
              return (
                <View style={styles.itemBase}>
                  <View style={[styles.itemCtn, {marginLeft: 50 * level}]}>
                    <View style={styles.circleCtn}>
                      <View style={styles.totalChildren}>
                        {!node.isParent ? (
                          <Text style={styles.totalChildrenTxt}>
                            {node.totalChildren}
                          </Text>
                        ) : (
                          <FontAwesome5Icon
                            name="plus"
                            size={15}
                            color={COLORS.gray}
                          />
                        )}
                      </View>
                      {!isExpanded &&
                        !node.isLastIndex &&
                        !node.isSameLevel && (
                          <View style={styles.verticalLine} />
                        )}
                    </View>
                    <View style={styles.line} />
                    <TouchableOpacity
                      style={{flexDirection: 'row'}}
                      onPress={() => onPressDetail(navigation, node)}>
                      <View style={styles.circleCtn}>
                        <View
                          style={[
                            styles.circle,
                            node.isMe && {backgroundColor: COLORS.warring},
                          ]}>
                          <Text style={styles.position}>{node.position}</Text>
                        </View>
                        {(isExpanded ||
                          (node.isSameLevel && !node.isLastIndex)) && (
                          <View style={styles.verticalLine} />
                        )}
                      </View>
                      <Text style={styles.name}>{node.name}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};
const ITEM_SIZE = 30;
const styles = StyleSheet.create({
  itemCtn: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  circle: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: ITEM_SIZE / 2,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  position: {
    color: COLORS.light,
    fontSize: SIZES.padding,
    alignItems: 'center',
  },
  indicator: {
    paddingRight: 10,
  },
  name: {
    ...FONTS.body5,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  totalChildren: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: ITEM_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  totalChildrenTxt: {
    color: COLORS.black,
    fontSize: SIZES.padding,
    alignItems: 'center',
  },
  verticalLine: {
    height: 30,
    width: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.gray,
    top: ITEM_SIZE,
    left: ITEM_SIZE / 2,
    position: 'absolute',
  },
  circleCtn: {
    alignSelf: 'center',
    position: 'relative',
  },
  itemBase: {
    position: 'relative',
    paddingHorizontal: 20,
  },
  line: {
    width: 20,
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.gray,
    alignSelf: 'center',
  },
});

export default ChannelTreeView;
