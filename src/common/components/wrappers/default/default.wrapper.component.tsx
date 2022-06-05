import React from 'react';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { Header } from '#common/components/composites';
import { Icon, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';
import { normalize } from '#common/utils/DynamicRatio';
import { translate } from '#common/utils/Translate';

import { DefaultWrapperProps } from './default.wrapper.types';

const DefaultWrapper: React.FC<DefaultWrapperProps> = ({
  children,
  headerType = 'default',
  headerTitle = translate('core.header-title'),
}) => {
  const { theme } = useTheme();

  const addStatusBarHeight = React.useCallback((value: number) => {
    return getStatusBarHeight(true) + value;
  }, []);

  const renderCloud = React.useCallback(
    (size: number, top: number, left?: number, right?: number) => {
      return (
        <View
          position="absolute"
          opacity={0.2}
          top={addStatusBarHeight(top)}
          {...{
            left,
            right,
          }}
        >
          <Icon
            name="cloud"
            color={theme.colors.fxGray}
            size={normalize(size)}
          />
        </View>
      );
    },
    [addStatusBarHeight, theme.colors.fxGray]
  );

  return (
    <View p="lg" pt={addStatusBarHeight(5)}>
      {renderCloud(160, 34, undefined, -75)}
      {renderCloud(220, 80, -105)}
      {renderCloud(80, 265, undefined, 20)}

      <Header type={headerType} title={headerTitle} />

      <View flex={1}>{children}</View>
    </View>
  );
};

export { DefaultWrapper };
