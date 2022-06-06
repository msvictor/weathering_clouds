/* eslint-disable no-console */
import { Platform } from 'react-native';

import { LoggerOptions } from './types';

const print = ({ component, method, params }: LoggerOptions): void => {
  if (__DEV__) {
    let message = '';

    if (typeof params === 'object') {
      message = Object.keys(params)
        .map((key) => `${key}: ${JSON.stringify(params[key])}`)
        .join(' ');
    } else {
      message = `${params ?? ''}`;
    }

    console.log(
      `Platform:${Platform.OS}::[${[component, method]
        .filter(Boolean)
        .join('::')}]`,
      message
    );
  }
};

export default { print };
