import { combineReducers } from '@reduxjs/toolkit';

import location from '#modules/_shared/reducers/location/slices';
import user from '#modules/user/reducers/slices';

export const modules = combineReducers({
  user,
  location,
});
