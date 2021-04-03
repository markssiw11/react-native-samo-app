import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
export const COLORS = {
  // base colors
  primary: '#24C16B', // green
  secondary: '#0C381F', // dark green
  info: '#14A3B8',
  warring: '#FFC106',
  light: '#F8F9FA',
  green: '#66D59A',
  lightGreen: '#E6FEF0',

  lime: '#00BA63',
  emerald: '#2BC978',
  lightCyan: '#CDEDF6',
  red: '#FF4134',
  lightRed: '#FFF1F0',

  purple: '#6B3CE9',
  lightpurple: '#F3EFFF',

  yellow: '#FFC664',
  lightyellow: '#FFF9EC',

  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#FCFBFC',
  boldGrey: '#3e3e3e',
  gray: '#C1C3C5',
  darkgray: '#C3C6C7',
  // lightGrey: '#C3C9C9',

  darkTurquoise: '#50C9CE',
  csBackGround: '#F1F2F6',
  gainsboro: '#dcdcdc',
  lightblue: '#add8e6',
  mintcream: '#f5fffa',
  lightBlack: '#000000',
  transparent: 'transparent',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
  bottom: 30,
  top: 50,
  border: 5,
  borderRadius: 5,
  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
  txt1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1},
  txt4: {fontFamily: 'SFUIDisplay-Light', fontSize: SIZES.body4},

  txt5: {fontFamily: 'SFUIDisplay-Light', fontSize: SIZES.body5},
};

export const DARK_THEME = {
  ...DarkTheme,
  colors: {
    // ...DarkTheme.colors,
    background: '#565C65',
    border: 'transparent',
    text: COLORS.white,
  },
};
export const DEFAULT_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

export const STYLES = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  row: {
    flexDirection: 'row',
  },
  ctn: {
    flex: 1,
  },
  borderTop: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
};

const appTheme = {COLORS, SIZES, FONTS, DARK_THEME, DEFAULT_THEME, STYLES};

export default appTheme;
