import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '#core/store/types';
import { ModulesState } from '#modules/_shared/store/types';

export const selector = (state: ApplicationState): ModulesState =>
  state.modules;

export const userSelector = createSelector(selector, (modules) => modules.user);
