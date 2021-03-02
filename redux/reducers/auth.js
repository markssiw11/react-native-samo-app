/* Login Reducer
 * handles login states in the app
 */
import produce from 'immer';
import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false,
  data: '',
};

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action?.type) {
      case types.TEXT_REDUCERS:
        draft.data = action.payload.data;
        break;
      default:
        draft.data = action.payload;
    }
  });

export default loginReducer;
