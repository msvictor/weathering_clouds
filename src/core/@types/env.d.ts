declare module 'react-native-config' {
  interface Env {
    API_URL: string;
    API_KEY: string;
    API_UNIT: string;
    API_LANG: string;
  }

  const Config: Env;
  export default Config;
}
