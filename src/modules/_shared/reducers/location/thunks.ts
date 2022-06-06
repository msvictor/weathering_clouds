import { createAsyncThunk } from '@reduxjs/toolkit';

import { StorageConstants } from '#core/constants';
import { LocationService } from '#modules/_shared/services';

import { LocationState } from './types';

export const getDeviceLocationData = createAsyncThunk(
  `${StorageConstants.SLICE_LOCATION}/getDeviceLocationData`,
  async (): Promise<LocationState> => {
    const location = await LocationService.getDeviceLocation();

    return {
      lat: location.lat,
      long: location.long,
      city: location.city ?? '',
      state: location.state ?? '',
    };
  }
);
