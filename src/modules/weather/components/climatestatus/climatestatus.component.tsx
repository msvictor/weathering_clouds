import React from 'react';

import { Icon, Text, View } from '#common/components/primitives';
import { getIconByApiName } from '#common/components/primitives/icon/icon.service';
import { useTheme } from '#common/hooks';
import { normalize } from '#common/utils/DynamicRatio';
import { translate } from '#common/utils/Translate';
import { DateService } from '#modules/_shared/services';

import { ClimateStatusProps } from './climatestatus.types';

const ClimateStatus: React.FC<ClimateStatusProps> = ({
  city,
  state,
  weather,
}) => {
  const { theme } = useTheme();

  const { temp, feelsLike, sunset, date } = React.useMemo(() => {
    return {
      temp: weather.main.temp.toFixed(0),
      date: DateService.getFormattedDate(weather.dt, 'EE, d MMM'),
      sunset: DateService.getFormattedDate(weather.sys.sunset, 'HH:mm'),
      feelsLike: `${weather.main.feels_like.toFixed(0)} ${translate(
        'weather.degree-symbol'
      )}`,
    };
  }, [
    weather.dt,
    weather.main.temp,
    weather.sys.sunset,
    weather.main.feels_like,
  ]);

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
          name={getIconByApiName(weather.weather[0].icon)}
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
