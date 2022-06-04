import { Action, configureStore, Store, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist';

import rootReducer from './root.reducer';
import { ApplicationState } from './types';

const AppStore: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const Persistor = persistStore(AppStore);

export { AppStore, Persistor };

export type AppState = ReturnType<typeof AppStore.getState>;
export type ThunkAppDispatch = ThunkDispatch<ApplicationState, void, Action>;
export const useAppDispatch = (): ThunkAppDispatch =>
  useDispatch<ThunkAppDispatch>();
