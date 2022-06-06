import { AxiosError } from 'axios';

import GenericError from '#core/error/GenericError';
import { httpOpenWeather } from '#core/providers/http';
import { LoggerService } from '#core/services';

import { CurrentWeatherData, NextForecasts } from './types';

const LOGGER_COMPONENT_NAME = 'ClimateService';

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
    LoggerService.print({
      component: LOGGER_COMPONENT_NAME,
      method: fetchCurrentWeather.name,
      params: error,
    });

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
    LoggerService.print({
      component: LOGGER_COMPONENT_NAME,
      method: fetchForecast.name,
      params: error,
    });

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
