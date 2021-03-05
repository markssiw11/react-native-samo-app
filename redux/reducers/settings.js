/* Login Reducer
 * handles login states in the app
 */
import produce from 'immer';
import * as types from '../actions/types';
import {LANGUAGE_CONSTANT} from '../../constants';
const initialState = {
  language: LANGUAGE_CONSTANT[0],
  isDarkMode: false,
};

const settingsReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    const {payload} = action;
    switch (action?.type) {
      case types.CHANGE_LANGUAGE:
        draft.language = payload.language;
        break;
      case types.CHANGE_MODE:
        draft.isDarkMode = payload.isDarkMode;
        break;
      default:
        draft.language = 'abc';
        break;
    }
  });

export default settingsReducers;
