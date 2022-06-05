import React from 'react';

import { View, Text, Icon } from '#common/components/primitives';
import { useTheme } from '#common/hooks';

import { ForecastItemProps } from './forecastitem.types';

const ForecastItem: React.FC<ForecastItemProps> = ({ time, temp, icon }) => {
  const { theme } = useTheme();

  return (
    <View
      p="lg"
      mr="md"
      rounded="circle"
      position="relative"
      overflow="hidden"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      borderWidth={0.5}
      borderColor="fxGray"
    >
      <View
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="fxGray"
        opacity={0.2}
      />
      <Text mt="xs" fontSize="sm" fontWeight="300">
        {time}
      </Text>

      <View rounded="circle" bg="background" p="lg">
        <Icon name={icon} color={theme.colors.text} size={theme.fontSize.xl} />
      </View>

      <Text mt="xs" fontSize="sm" fontWeight="400">
        {temp}
      </Text>
    </View>
  );
};

export { ForecastItem };
