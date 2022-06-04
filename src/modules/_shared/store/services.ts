import AsyncStorage from '@react-native-async-storage/async-storage';

import { GetPersistConfigResponse } from './types';

export function getPersistConfig(
  key: string,
  whitelist: string[] = ['']
): GetPersistConfigResponse {
  return {
    key,
    whitelist,
    storage: AsyncStorage,
  };
}
