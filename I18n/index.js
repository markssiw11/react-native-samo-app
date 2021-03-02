import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './languages/english.json';
import vi from './languages/vi.json';
import getDeviceLanguage from './getDeviceLanguage';

const languageDetector = {
  type: 'languageDetector',
  async: false, // async detection
  detect: (cb) => cb(getDeviceLanguage()),
  init: () => {},
  cacheUserLanguage: () => {},
};
const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};
export const i18nInit = () =>
  i18n
    .use(languageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: 'vi',
      fallbackLng: 'vi',
      // keySeparator: false, // we do not use keys in form messages.welcome
      debug: process.env.NODE_ENV !== 'production',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default',
      },
    });
export const currLanguage = () => i18n.language.substr(0, 2);
export const t = (key, options) => i18n.t(key, options);
export default i18n;
