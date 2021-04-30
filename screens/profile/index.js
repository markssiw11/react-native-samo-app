import React, {
  useState,
  useCallback,
  useRef,
  forwardRef,
  createRef,
} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES, FONTS, STYLES} from '../../constants';
// import CheckBox from '@react-native-community/checkbox';
import BottomSheetScreen from '../../container/bottomSheet';
import CheckBox from '../../container/checkBox';
import DateTimeField from '../../container/dateTime';
import {Slider} from 'react-native-simple-slider';
function ProfileScreen(params) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const onPress = () => {
    setToggleCheckBox(!toggleCheckBox);
  };
  const formRef = useRef(null);
  const bs = createRef();
  const onPressSnapPoint = () => {
    bs.current?.snapTo(0);
  };
  return (
    <KeyboardAwareScrollView
      style={styles.ctn}
      showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.avatarCtn} onPress={onPressSnapPoint}>
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
      </TouchableOpacity>
      <View style={styles.body}>
        <BaseText icon="user" value="Nguyễn Văn Long" title="Họ Và Tên" />
        <BaseText icon="phone" value="0934172647" title="Số Điện Thoại" />
        <GenderSelect
          value={toggleCheckBox}
          onChange={onPress}
          title={'Giới Tính'}
          ref={formRef}
        />
        <BaseText icon="phone" title="Địa Chỉ" />
        {/* <DateTimeField label="Ngay sinh" title="Ngay sinh" /> */}
        <RenderSlider />
        <View style={{height: 200}} />
      </View>
      <BottomSheetScreen
        sheetRef={bs}
        // fall={fall}
        // onPressFirst={onPressChooseImage}
      />
    </KeyboardAwareScrollView>
  );
}
const SIZE_ICON = 90;
function RenderSlider() {
  const [value, setValue] = React.useState();
  return (
    <View style={{}}>
      <Text>hello</Text>
      <Slider
        maximumValue={10000000}
        tintColor="green"
        backgroundColor="#99E1D9"
        minimumValue={0}
        unit={1000}
        widthLine={300}
        mode="currency"
        value={value}
        style={{alignItems: 'center'}}
        currencySetting={{lang: 'vi', fixed: 0}}
        onChangeValue={setValue}
      />
    </View>
  );
}
function BaseText({icon, value, title = 'Example'}) {
  return (
    <View style={styles.inputCtn}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.txtInputCtn}>
        <TextInput
          value={value}
          style={styles.txtInput}
          placeholder={title}
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const GenderSelect = forwardRef(({value, title, disabled}, ref) => {
  const [gender, setGender] = useState(value);
  const onChangeGender = (gen) => {
    setGender(gen);
  };
  return (
    <View style={styles.genderCtn} ref={ref}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={STYLES.row}>
        <View
          style={[
            styles.gender,
            gender === MALE && {borderColor: COLORS.lightBlue},
          ]}>
          <CheckBox
            disabled={disabled}
            value={gender === MALE}
            onValueChange={() => onChangeGender(MALE)}
          />
          <Text style={styles.txt}>Male</Text>
        </View>
        <View
          style={[
            styles.gender,
            {marginLeft: 10},
            gender === FEMALE && {borderColor: COLORS.info},
          ]}>
          <CheckBox
            disabled={disabled}
            value={gender === FEMALE}
            onValueChange={() => onChangeGender(FEMALE)}
          />
          <Text style={styles.txt}>Female</Text>
        </View>
      </View>
    </View>
  );
});
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
  inputCtn: {
    width: SIZES.width - SIZES.padding * 4,
    marginVertical: SIZES.padding,
  },
  txtInputCtn: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: SIZES.borderRadius,
    flexDirection: 'row',
  },
  txtInput: {
    paddingVertical: SIZES.padding2,
    marginLeft: SIZES.padding,
    ...FONTS.txt4,
    flex: 1,
    color: 'black',
  },
  icon: {
    alignSelf: 'center',
    paddingHorizontal: SIZES.padding,
  },

  headerTitle: {
    paddingVertical: 5,
    ...FONTS.txt4,
  },
  genderCtn: {
    // justifyContent: 'space-between',
  },
  gender: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: SIZES.padding,
    alignItems: 'center',
    width: (SIZES.width - SIZES.padding * 4 - 10) / 2,
    borderRadius: SIZES.borderRadius,
    flexDirection: 'row',
    paddingLeft: SIZES.padding,
  },
  txt: {
    paddingLeft: SIZES.padding,
    ...FONTS.txt4,
  },
  body: {
    marginTop: SIZES.top,
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: 100,
  },
});
const MALE = 'male';
const FEMALE = 'female';
export default ProfileScreen;
