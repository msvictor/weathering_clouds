import React from 'react';

import { useSelector } from 'react-redux';

import { Text } from '#common/components/primitives';
import { NoBackgroundWrapper } from '#common/components/wrappers';
import { translate } from '#common/utils/Translate';
import { NavigationService } from '#core/services';
import {
  NextDayForecastCard,
  NextForecastsList,
} from '#modules/weather/components';
import { climateSelector } from '#modules/weather/reducers/climate/selector';

const NextForecast: React.FC = () => {
  const { goBack } = NavigationService;
  const { weather, forecasts } = useSelector(climateSelector);

  return (
    <NoBackgroundWrapper headerType="back" headerAction={() => goBack()}>
      <Text mt="xl" fontWeight="bold" fontSize="xl">
        {translate('weather.next-5-days-forecast')}
      </Text>

      <NextDayForecastCard
        date="Monday"
        min="12 C"
        max="26 C"
        wind="12 km/h"
        humidity="55%"
        visibility="25 km"
        uv="1"
      />

      <NextForecastsList forecasts={['', '', '', '']} />
    </NoBackgroundWrapper>
  );
};

export { NextForecast };
