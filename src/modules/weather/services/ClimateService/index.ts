import { AxiosError } from 'axios';

import GenericError from '#core/error/GenericError';
import { httpOpenWeather } from '#core/providers/http';

import { CurrentWeatherData, NextForecasts } from './types';

export const fetchCurrentWeather = async (
  lat: number,
  lon: number
): Promise<CurrentWeatherData> => {
  try {
    const { data } = await httpOpenWeather.get('/weather', {
      params: {
        lat,
        lon,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }

    throw new GenericError(error.data.message);
  }
};

export const fetchForecast = async (
  lat: number,
  lon: number
): Promise<NextForecasts> => {
  try {
    const { data } = await httpOpenWeather.get('/forecast', {
      params: {
        lat,
        lon,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }

    throw new GenericError(error.data.message);
  }
};

export default {
  fetchCurrentWeather,
  fetchForecast,
};
