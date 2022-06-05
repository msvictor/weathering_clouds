import React from 'react';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Header } from '#common/components/composites';
import { View } from '#common/components/primitives';
import { translate } from '#common/utils/Translate';

import { NoBackgroundWrapperProps } from './nobackground.wrapper.types';

const NoBackgroundWrapper: React.FC<NoBackgroundWrapperProps> = ({
  children,
  headerType = 'default',
  headerTitle = translate('core.header-title'),
  headerAction,
}) => {
  return (
    <View p="lg" pt={getStatusBarHeight(true) + 5} flex={1}>
      <Header type={headerType} title={headerTitle} action={headerAction} />

      <View flex={1}>{children}</View>
    </View>
  );
};

export { NoBackgroundWrapper };
