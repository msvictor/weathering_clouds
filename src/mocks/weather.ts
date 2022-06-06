import { CurrentWeatherData } from '#modules/weather/services/ClimateService/types';

export default {
  coord: {
    lon: -48.1968,
    lat: -7.1927,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'nublado',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 30.08,
    feels_like: 30.56,
    temp_min: 30.08,
    temp_max: 30.08,
    pressure: 1013,
    humidity: 46,
    sea_level: 1013,
    grnd_level: 983,
  },
  visibility: 10000,
  wind: {
    speed: 3.89,
    deg: 104,
    gust: 5.26,
  },
  clouds: {
    all: 68,
  },
  dt: 1654527149,
  sys: {
    country: 'BR',
    sunrise: 1654507203,
    sunset: 1654549389,
  },
  timezone: -10800,
  id: 3407357,
  name: 'Araguaína',
  cod: 200,
} as unknown as CurrentWeatherData;
