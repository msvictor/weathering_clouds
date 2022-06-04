import { createAsyncThunk } from '@reduxjs/toolkit';

import { StorageConstants } from '#core/constants';

import { UserState } from './types';

export const getUserData = createAsyncThunk(
  `${StorageConstants.SLICE_USER}/getUserData`,
  async () => {
    return {} as UserState;
  }
);
