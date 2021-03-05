import * as types from './types';
export function changeLanguage(language) {
  return {
    type: types.CHANGE_LANGUAGE,
    payload: {
      language,
    },
  };
}
export function changeMode(isDarkMode) {
  return {
    type: types.CHANGE_MODE,
    payload: {
      isDarkMode,
    },
  };
}
