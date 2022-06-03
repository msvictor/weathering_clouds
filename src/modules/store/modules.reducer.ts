import { combineReducers } from '@reduxjs/toolkit';

import user from '#modules/user/reducers/slices';

export const modules = combineReducers({
  user,
});
