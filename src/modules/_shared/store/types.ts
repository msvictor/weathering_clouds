import { AsyncStorageStatic } from '@react-native-async-storage/async-storage/lib/typescript/types';

import { LocationState } from '#modules/_shared/reducers/location/types';

export interface ModulesState {
  location: LocationState;
}

export interface GetPersistConfigResponse {
  key: string;
  storage: AsyncStorageStatic;
  whitelist: string[];
}
