import React from 'react';

import { Icon, Text, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';
import { normalize } from '#common/utils/DynamicRatio';
import { translate } from '#common/utils/Translate';

import { ClimateStatusProps } from './climatestatus.types';

const ClimateStatus: React.FC<ClimateStatusProps> = ({
  date,
  temp,
  city,
  state,
  sunset,
  feelsLike,
}) => {
  const { theme } = useTheme();

  return (
    <View
      px="xl"
      flex={3}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <View flexDir="row" alignItems="center" mb="sm">
        <Icon
          name="cloud"
          color={theme.colors.text}
          size={theme.fontSize['5xl']}
        />
        <View ml="sm">
          <Text fontSize="2xl">{translate('weather.today')}</Text>
          <Text mt="xs" fontSize="sm" color="fxGray" fontWeight="300">
            {date}
          </Text>
        </View>
      </View>

      <View flexDir="row" alignItems="flex-start" my="lg">
        <Text fontSize={normalize(80)}>{temp}</Text>
        <Icon
          name="celsius"
          color={theme.colors.text}
          size={theme.fontSize['5xl']}
        />
      </View>

      <Text mt="xs" fontSize="sm" color="fxGray" fontWeight="300" mb="md">
        {city}, {state}
      </Text>

      <Text mt="xs" fontSize="sm" color="fxGray" fontWeight="300">
        {`${translate('weather.feels-like')} ${feelsLike}`} -{' '}
        {`${translate('weather.sunset')} ${sunset} `}
      </Text>
    </View>
  );
};

export { ClimateStatus };
