import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import { StorageConstants } from '#core/constants';
import { getPersistConfig } from '#modules/_shared/store/services';

import { getDeviceLocationData } from './thunks';
import { LocationState } from './types';

const initialState: LocationState = {
  city: '',
  state: '',
  lat: 0,
  long: 0,
  hasError: false,
  isLoading: false,
  isLocationEnable: true,
};

const locationSlice = createSlice({
  name: StorageConstants.SLICE_LOCATION,
  initialState,
  reducers: {
    setLocation(state, { payload }: PayloadAction<LocationState>) {
      state.city = payload.city;
      state.state = payload.state;
      state.lat = payload.lat;
      state.long = payload.long;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDeviceLocationData.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getDeviceLocationData.rejected, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.isLocationEnable = false;
      })
      .addCase(
        getDeviceLocationData.fulfilled,
        (state, { payload }: PayloadAction<LocationState>) => {
          state.isLoading = false;
          state.hasError = false;
          state.isLocationEnable = true;
          state.city = payload.city;
          state.state = payload.state;
          state.lat = payload.lat;
          state.long = payload.long;
        }
      ),
});

export const { setLocation } = locationSlice.actions;

export default persistReducer(
  getPersistConfig(StorageConstants.SLICE_USER),
  locationSlice.reducer
);
