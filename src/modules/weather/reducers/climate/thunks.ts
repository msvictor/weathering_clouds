import { createAsyncThunk } from '@reduxjs/toolkit';

import { StorageConstants } from '#core/constants';
import { ClimateService } from '#modules/weather/services';
import { Coord } from '#modules/weather/services/ClimateService/types';

export const getCurrentWeather = createAsyncThunk(
  `${StorageConstants.SLICE_CLIMATE}/getCurrentWeather`,
  async ({ lat, lon }: Coord) => {
    const data = await ClimateService.fetchCurrentWeather(lat, lon);

    return data;
  }
);

export const getForecasts = createAsyncThunk(
  `${StorageConstants.SLICE_CLIMATE}/getForecasts`,
  async ({ lat, lon }: Coord) => {
    const data = await ClimateService.fetchForecast(lat, lon);

    return data.list;
  }
);
