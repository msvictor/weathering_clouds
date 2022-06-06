import {
  CurrentWeatherData,
  ForecastWeather,
} from '#modules/weather/services/ClimateService/types';

export interface ClimateState {
  weather: CurrentWeatherData | null;
  forecasts: ForecastWeather[] | null;
  nextDaysForecasts: ForecastWeather[] | null;
  hasError?: boolean;
  isLoading?: boolean;
}
