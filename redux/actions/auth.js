import * as types from './types';
export function testReducers(data) {
  return {
    type: types.TEXT_REDUCERS,
    payload: {
      data,
    },
  };
}
