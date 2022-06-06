import React from 'react';
import { BackHandler } from 'react-native';

export const useBackHandler = (handler: () => boolean): void => {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => BackHandler.removeEventListener('hardwareBackPress', handler);
  }, [handler]);
};
