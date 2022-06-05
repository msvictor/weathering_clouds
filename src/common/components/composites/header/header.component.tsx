import React from 'react';

import { Icon, Text, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';

import { HeaderProps } from './header.types';

const Header: React.FC<HeaderProps> = ({ title, type }) => {
  const { theme } = useTheme();

  switch (type) {
    case 'back':
      return (
        <View py="md" flexDir="row" alignItems="center" position="relative">
          <View position="absolute">
            <Icon
              name="chevron-left"
              size={theme.fontSize.xl}
              color={theme.colors.text}
            />
          </View>

          <View py="md" flex={1} alignItems="center" justifyContent="center">
            <Text>{title}</Text>
          </View>
        </View>
      );

    case 'menu':
      return (
        <View py="md" flexDir="row" alignItems="center" position="relative">
          <View position="absolute">
            <Icon
              name="menu"
              size={theme.fontSize['3xl']}
              color={theme.colors.text}
            />
          </View>

          <View py="md" flex={1} alignItems="center" justifyContent="center">
            <Text>{title}</Text>
          </View>
        </View>
      );

    case 'default':
    default:
      return (
        <View py="md" alignItems="center" justifyContent="center">
          <Text>{title}</Text>
        </View>
      );
  }
};
export { Header };
