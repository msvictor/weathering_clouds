import React from 'react';

import { Card } from '#common/components/composites';
import { Text, View } from '#common/components/primitives';
import { translate } from '#common/utils/Translate';

import { InfoRow } from './components';
import { NextDayForecastCardProps } from './nextdayforecastcard.types';

const NextDayForecastCard: React.FC<NextDayForecastCardProps> = ({
  date,
  min,
  max,
  wind,
  humidity,
  visibility,
  uv,
}) => {
  return (
    <View my="xl" mx="lg">
      <Card>
        <View flexDir="row" alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="lg">
            {date}
          </Text>

          <View flexDir="row" alignItems="flex-end">
            <Text fontWeight="bold" fontSize="lg">
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
          <InfoRow label={translate('weather.uv')} description={uv} />
        </View>
      </Card>
    </View>
  );
};

export { NextDayForecastCard };
