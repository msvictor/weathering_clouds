import AsyncStorage from '@react-native-async-storage/async-storage';

import { GetPersistConfigResponse } from './type';

export function getPersistConfig(
  key: string,
  whitelist?: string[]
): GetPersistConfigResponse {
  return {
    key,
    storage: AsyncStorage,
    whitelist: whitelist ?? [''],
  };
}
