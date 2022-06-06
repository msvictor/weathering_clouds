import { combineReducers } from '@reduxjs/toolkit';

import location from '#modules/_shared/reducers/location/slices';
import climate from '#modules/weather/reducers/climate/slices';

export const modules = combineReducers({
  location,
  climate,
});
