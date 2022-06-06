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
      rounded="lg"
      position="relative"
      overflow="hidden"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      borderWidth={0.5}
      borderColor="fxGray"
      bg={`${theme.colors.fxGray}33`}
    >
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
