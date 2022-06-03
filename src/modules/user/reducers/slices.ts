import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import { StorageConstants } from '#core/constants';
import { getPersistConfig } from '#modules/store/services';

import { getUserData } from './thunks';
import { UserState } from './type';

const initialState: UserState = {
  id: '',
  given_name: '',
  family_name: '',
  email: '',
  picture: '',
};

const userSlice = createSlice({
  name: StorageConstants.SLICE_USER,
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserState>) {
      state.id = payload.id;
      state.given_name = payload.given_name;
      state.family_name = payload.family_name;
      state.email = payload.email;
      state.picture = payload.picture;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(
      getUserData.fulfilled,
      (state, { payload }: PayloadAction<UserState>) => {
        state.id = payload.id;
        state.given_name = payload.given_name;
        state.family_name = payload.family_name;
        state.email = payload.email;
        state.picture = payload.picture;
      }
    ),
});

export const { setUser } = userSlice.actions;

export default persistReducer(
  getPersistConfig(StorageConstants.SLICE_USER),
  userSlice.reducer
);
