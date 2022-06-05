/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  StackActions,
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

import { NavigationConfig } from './types';

const config: NavigationConfig<any> = {};

function setNavigator(nav: NavigationContainerRef<any> | null): void {
  if (nav) config.navigator = nav;
}

function navigate(routeName: string, params?: Record<string, unknown>): void {
  if (config.navigator && routeName) {
    const action = CommonActions.navigate({ name: routeName, params });
    config.navigator.dispatch(action);
  }
}

function replace(routeName: string, params?: Record<string, unknown>): void {
  if (config.navigator && routeName) {
    const action = StackActions.replace(routeName, params);
    config.navigator.dispatch(action);
  }
}

function goBack(): void {
  if (config.navigator) {
    const action = CommonActions.goBack();
    config.navigator?.dispatch(action);
  }
}

export default { setNavigator, navigate, replace, goBack };
