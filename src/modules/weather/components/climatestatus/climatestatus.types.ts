import { CurrentWeatherData } from '#modules/weather/services/ClimateService/types';

export interface ClimateStatusProps {
  city: string;
  state: string;
  weather: CurrentWeatherData;
}
