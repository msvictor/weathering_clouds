import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import { StorageConstants } from '#core/constants';
import { DateService } from '#modules/_shared/services';
import { getPersistConfig } from '#modules/_shared/store/services';
import {
  CurrentWeatherData,
  ForecastWeather,
} from '#modules/weather/services/ClimateService/types';

import { getCurrentWeather, getForecasts } from './thunks';
import { ClimateState } from './types';

const initialState: ClimateState = {
  weather: null,
  forecasts: null,
  nextDaysForecasts: null,
  hasError: false,
  isLoading: false,
};

const isActionPending = isPending(getCurrentWeather, getForecasts);
const isActionRejected = isRejected(getCurrentWeather, getForecasts);
const isActionFulfilled = isFulfilled(getCurrentWeather, getForecasts);

const climateSlice = createSlice({
  name: StorageConstants.SLICE_CLIMATE,
  initialState,
  reducers: {
    setCurrentWeather(state, { payload }: PayloadAction<CurrentWeatherData>) {
      state.weather = payload;
    },
    setCurrentForecasts(state, { payload }: PayloadAction<ForecastWeather[]>) {
      state.forecasts = payload;
    },
    setNextDaysForecasts(state, { payload }: PayloadAction<ForecastWeather[]>) {
      state.nextDaysForecasts = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(
        getCurrentWeather.fulfilled,
        (state, { payload }: PayloadAction<CurrentWeatherData>) => {
          state.weather = payload;
        }
      )
      .addCase(
        getForecasts.fulfilled,
        (state, { payload }: PayloadAction<ForecastWeather[]>) => {
          state.forecasts = payload.filter((item) =>
            DateService.checkIfIsToday(item.dt)
          );
          state.nextDaysForecasts = payload.filter(
            (item) => !DateService.checkIfIsToday(item.dt)
          );
        }
      )
      .addMatcher(isActionPending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addMatcher(isActionRejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addMatcher(isActionFulfilled, (state) => {
        state.isLoading = false;
        state.hasError = false;
      }),
});

export const { setCurrentWeather, setCurrentForecasts, setNextDaysForecasts } =
  climateSlice.actions;

export default persistReducer(
  getPersistConfig(StorageConstants.SLICE_USER),
  climateSlice.reducer
);
