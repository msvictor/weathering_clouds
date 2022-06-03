import { AsyncStorageStatic } from '@react-native-async-storage/async-storage/lib/typescript/types';

import { UserState } from '#modules/user/reducers/type';

export interface ModulesState {
  user: UserState;
}

export interface GetPersistConfigResponse {
  key: string;
  storage: AsyncStorageStatic;
  whitelist: string[];
}
