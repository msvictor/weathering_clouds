import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import { StorageConstants } from '#core/constants';
import { getPersistConfig } from '#modules/_shared/store/services';

import { getDeviceLocationData } from './thunks';
import { LocationState } from './types';

const initialState: LocationState = {
  city: null,
  state: null,
  lat: null,
  long: null,
  hasError: false,
  isLoading: false,
  isLocationEnable: false,
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
        state.isLoading = false;
        state.hasError = true;
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
