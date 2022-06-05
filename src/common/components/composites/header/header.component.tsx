import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon, Text, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';

import { HeaderProps } from './header.types';

const Header: React.FC<HeaderProps> = ({ title, type, action }) => {
  const { theme } = useTheme();

  const refresh = React.useCallback(() => {
    return (
      <View position="absolute" right={5}>
        <Icon
          name="refresh"
          size={theme.fontSize['2xl']}
          color={theme.colors.text}
        />
      </View>
    );
  }, [theme.fontSize, theme.colors.text]);

  const icon = React.useCallback(
    (name: string, size: number) => {
      return (
        <View position="absolute" zIndex={1000}>
          <TouchableOpacity onPress={action}>
            <Icon name={name} size={size} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
      );
    },
    [action, theme.colors.text]
  );

  switch (type) {
    case 'back':
      return (
        <View py="md" flexDir="row" alignItems="center" position="relative">
          {refresh()}
          {icon('chevron-left', theme.fontSize.xl)}

          <View flex={1} alignItems="center" justifyContent="center">
            <Text>{title}</Text>
          </View>
        </View>
      );

    case 'menu':
      return (
        <View py="md" flexDir="row" alignItems="center" position="relative">
          {refresh()}
          {icon('menu', theme.fontSize['3xl'])}

          <View flex={1} alignItems="center" justifyContent="center">
            <Text>{title}</Text>
          </View>
        </View>
      );

    case 'default':
    default:
      return (
        <View
          py="md"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          {refresh()}
          <Text>{title}</Text>
        </View>
      );
  }
};
export { Header };
