import { AsyncStorageStatic } from '@react-native-async-storage/async-storage/lib/typescript/types';

import { UserState } from '#modules/user/reducers/types';

export interface ModulesState {
  user: UserState;
}

export interface GetPersistConfigResponse {
  key: string;
  storage: AsyncStorageStatic;
  whitelist: string[];
}
