import { AsyncStorageStatic } from '@react-native-async-storage/async-storage/lib/typescript/types';

import { LocationState } from '#modules/_shared/reducers/location/types';
import { UserState } from '#modules/user/reducers/types';

export interface ModulesState {
  user: UserState;
  location: LocationState;
}

export interface GetPersistConfigResponse {
  key: string;
  storage: AsyncStorageStatic;
  whitelist: string[];
}
