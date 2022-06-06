import React from 'react';

import { Card } from '#common/components/composites';
import { Text, View } from '#common/components/primitives';
import { translate } from '#common/utils/Translate';
import { DateService } from '#modules/_shared/services';

import { InfoRow } from './components';
import { NextDayForecastCardProps } from './nextdayforecastcard.types';

const NextDayForecastCard: React.FC<NextDayForecastCardProps> = ({
  forecast,
}) => {
  const formatDegree = React.useCallback((temp) => {
    return `${temp.toFixed(0)} ${translate('weather.degree-symbol')}`;
  }, []);

  const { feelsLike, date, min, max, wind, humidity, visibility } =
    React.useMemo(() => {
      return {
        date: `${DateService.getFormattedDate(forecast.dt, 'EEEE-HH:mm')}h`,
        feelsLike: formatDegree(forecast.main.feels_like),
        min: formatDegree(forecast.main.temp_min),
        max: formatDegree(forecast.main.temp_max),
        wind: `${(forecast.wind.speed * 3.6).toFixed(0)} km/h`,
        humidity: `${forecast.main.humidity.toFixed(0)}%`,
        visibility: `${(forecast.visibility / 1000).toFixed(0)} km`,
      };
    }, [
      forecast.dt,
      forecast.main.feels_like,
      forecast.main.humidity,
      forecast.main.temp_max,
      forecast.main.temp_min,
      forecast.visibility,
      forecast.wind.speed,
      formatDegree,
    ]);

  return (
    <View my="xl" mx="lg">
      <Card>
        <View flexDir="row" alignItems="center" justifyContent="space-between">
          <Text color="fxDarkest" fontWeight="bold" fontSize="lg">
            {date}
          </Text>

          <View flexDir="row" alignItems="flex-end">
            <Text color="fxDarkest" fontWeight="bold" fontSize="lg">
              {max}
            </Text>
            <Text> - </Text>
            <Text fontWeight="bold" color="fxGray" opacity={0.5}>
              {min}
            </Text>
          </View>
        </View>

        <View
          mt="xl"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <InfoRow label={translate('weather.wind')} description={wind} />
          <InfoRow
            label={translate('weather.humidity')}
            description={humidity}
          />
        </View>

        <View
          mt="lg"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <InfoRow
            label={translate('weather.visibility')}
            description={visibility}
          />
          <InfoRow
            label={translate('weather.feels-like')}
            description={feelsLike}
          />
        </View>
      </Card>
    </View>
  );
};

export { NextDayForecastCard };
