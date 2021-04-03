import * as React from 'react';
import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
// import ImagePicker from 'react-native-image-crop-picker';
import {SIZES, STYLES} from '../../constants';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const width = Dimensions.get('window').width;

function BottomSheetScreen({sheetRef, fall, onPressFirst}) {
  const openImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 200,
        maxHeight: 200,
      },
      (response) => {
        // setResponse(response);
        console.log('Response========', response);
      },
    );
  };
  const openCamera = () => {};
  const renderContent = () => (
    <View style={styles.content}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>

      <Text style={{fontSize: 24, fontWeight: '600'}} onPress={() => {}}>
        Đổi avatar
      </Text>
      <TouchableOpacity style={styles.btn} onPress={openImage}>
        <Text style={styles.btnText}>Chọn avatar từ thư viện</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn]} onPress={openCamera}>
        <Text style={styles.btnText}>Chụp ảnh</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
          sheetRef?.current?.snapTo(1);
        }}>
        <Text style={styles.btnText}>Đóng</Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => {
    return (
      <View style={STYLES.borderTop}>
        {/* <View style={styles.header} /> */}
        {renderContent()}
      </View>
    );
  };
  return (
    // <>
    <BottomSheet
      ref={sheetRef}
      snapPoints={[(SIZES.height * 2) / 3, -400]}
      initialSnap={1}
      borderRadius={10}
      callbackNode={fall}
      enabledGestureInteraction={true}
      renderHeader={renderHeader}
    />
    // </>
  );
}
const styles = StyleSheet.create({
  // header: {
  //   backgroundColor: '#FFFFFF',
  //   paddingTop: 20,
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   shadowColor: '#333333',
  //   shadowOffset: {
  //     width: -1,
  //     height: -3,
  //   },
  //   shadowOpacity: 0.6,
  //   shadowRadius: 2,
  //   elevation: 0,
  // },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'grey',
  },
  btn: {
    backgroundColor: '#ff6347',
    width: width - 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    marginVertical: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
  },
  content: {
    backgroundColor: 'white',
    padding: 16,
    height: 450,
    alignItems: 'center',
    ...STYLES.borderTop,
  },
});
export default BottomSheetScreen;
