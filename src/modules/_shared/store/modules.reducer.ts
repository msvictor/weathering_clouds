import { combineReducers } from '@reduxjs/toolkit';

import location from '#modules/_shared/reducers/location/slices';

export const modules = combineReducers({
  location,
});
