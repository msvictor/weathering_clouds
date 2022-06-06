import React from 'react';

import { Icon, Text, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';

import { ForecastListItemProps } from './forecastlistitem.types';

const ForecastListItem: React.FC<ForecastListItemProps> = ({
  date,
  min,
  max,
}) => {
  const { theme } = useTheme();

  return (
    <View
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      px="md"
      py="lg"
    >
      <Text fontWeight="bold" textTransform="uppercase">
        {date}
      </Text>

      <Icon
        name="cloud"
        size={theme.fontSize.lg}
        color={theme.colors.fxLightBlue}
      />

      <Text fontWeight="bold" color="fxGray" opacity={0.5}>
        min: {min}
      </Text>

      <Text fontWeight="bold">max: {max}</Text>
    </View>
  );
};

export { ForecastListItem };
