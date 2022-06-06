import { AsyncStorageStatic } from '@react-native-async-storage/async-storage/lib/typescript/types';

import { LocationState } from '#modules/_shared/reducers/location/types';
import { ClimateState } from '#modules/weather/reducers/climate/types';

export interface ModulesState {
  location: LocationState;
  climate: ClimateState;
}

export interface GetPersistConfigResponse {
  key: string;
  storage: AsyncStorageStatic;
  whitelist: string[];
}
