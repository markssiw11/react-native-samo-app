// React Native Tree View for Android and IOS devices
// https://aboutreact.com/react-native-final-tree-view/

// import React in our code
import React, {useEffect, useState} from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';

//import library for the TreeView
import TreeView from 'react-native-final-tree-view';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, FONTS, SIZES} from '../../constants';
import {getChannelNodeFromApi, getProductFormApi} from './api';

const onPressDetail = (navigation, params) => {
  navigation.navigate('NodeDetails', params);
};
const ChannelTreeView = ({navigation}) => {
  const [channelData, setChannelData] = useState([]);
  const [from, setFrom] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const _data = await getChannelNodeFromApi(from);
      setChannelData(_data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <ActivityIndicator size="large" color="black" />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[channelData]}
        keyExtractor={(_, index) => `${index}`}
        renderItem={RenderTreeView}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
const RenderTreeView = ({item}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TreeView
        data={item}
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
                  {!isExpanded && !node.isLastIndex && !node.isSameLevel && (
                    <View style={styles.verticalLine} />
                  )}
                </View>
                <View style={styles.line} />
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  onPress={() => {}}>
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
