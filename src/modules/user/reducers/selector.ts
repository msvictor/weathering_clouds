import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '#core/store/type';
import { ModulesState } from '#modules/_shared/store/type';

export const selector = (state: ApplicationState): ModulesState =>
  state.modules;

export const userSelector = createSelector(selector, (modules) => modules.user);
