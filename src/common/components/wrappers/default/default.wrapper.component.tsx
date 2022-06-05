import React from 'react';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Header } from '#common/components/composites';
import { View } from '#common/components/primitives';
import { translate } from '#common/utils/Translate';

import { DefaultWrapperProps } from './default.wrapper.types';

const DefaultWrapper: React.FC<DefaultWrapperProps> = ({
  children,
  headerType = 'default',
  headerTitle = translate('core.header-title'),
}) => {
  return (
    <View p="lg" pt={getStatusBarHeight(true) + 5}>
      <Header type={headerType} title={headerTitle} />

      <View flex={1}>{children}</View>
    </View>
  );
};

export { DefaultWrapper };
