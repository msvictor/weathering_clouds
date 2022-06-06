import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';

import { Text, View } from '#common/components/primitives';
import { NoBackgroundWrapper } from '#common/components/wrappers';
import { useTheme } from '#common/hooks';
import { translate } from '#common/utils/Translate';
import { NavigationService } from '#core/services';
import {
  NextDayForecastCard,
  NextForecastsList,
} from '#modules/weather/components';
import { climateSelector } from '#modules/weather/reducers/climate/selector';

const NextForecast: React.FC = () => {
  const { theme } = useTheme();
  const { goBack } = NavigationService;
  const { nextDaysForecasts, isLoading } = useSelector(climateSelector);

  if (isLoading || nextDaysForecasts === null) {
    return (
      <NoBackgroundWrapper>
        <View flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={theme.colors.accent} />
        </View>
      </NoBackgroundWrapper>
    );
  }

  return (
    <NoBackgroundWrapper headerType="back" headerAction={() => goBack()}>
      <Text mt="xl" fontWeight="bold" fontSize="xl">
        {translate('weather.next-5-days-forecast')}
      </Text>

      <NextDayForecastCard forecast={nextDaysForecasts[0]} />

      <NextForecastsList
        forecasts={nextDaysForecasts.filter((v, index) => index !== 0)}
      />
    </NoBackgroundWrapper>
  );
};

export { NextForecast };
