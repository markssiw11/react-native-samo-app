// @flow
/*
 * combines all th existing reducers
 */

// import theme from './themeReducer';
import auth from './auth';
import settings from './settings';
export default {auth, settings};
