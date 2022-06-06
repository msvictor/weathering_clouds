import axios, { AxiosInstance } from 'axios';
import Config from 'react-native-config';

class HttpOpenWeather {
  httpOpenWeather: AxiosInstance;

  constructor() {
    this.httpOpenWeather = axios.create({
      baseURL: Config.API_URL,
      timeout: 30000,
      timeoutErrorMessage: 'Tempo limite da requisição excedido.',
      params: {
        appid: Config.API_KEY,
        lang: Config.API_LANG,
        units: Config.API_UNIT,
      },
    });
    this.initInterceptors();
  }

  private initInterceptors(): void {
    // do something if needed
  }
}

export const { httpOpenWeather } = new HttpOpenWeather();
