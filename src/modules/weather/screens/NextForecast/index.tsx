import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';

import { Text, View } from '#common/components/primitives';
import { NoBackgroundWrapper } from '#common/components/wrappers';
import { useTheme } from '#common/hooks';
import { translate } from '#common/utils/Translate';
import { NavigationService } from '#core/services';
import { useAppDispatch } from '#core/store/redux.store';
import { locationSelector } from '#modules/_shared/reducers/location/selector';
import {
  NextDayForecastCard,
  NextForecastsList,
} from '#modules/weather/components';
import { climateSelector } from '#modules/weather/reducers/climate/selector';
import { getForecasts } from '#modules/weather/reducers/climate/thunks';

const NextForecast: React.FC = () => {
  const dispatch = useAppDispatch();

  const { theme } = useTheme();
  const { goBack } = NavigationService;

  const { nextDaysForecasts, isLoading } = useSelector(climateSelector);
  const { lat, long } = useSelector(locationSelector);

  const getData = React.useCallback(async () => {
    await dispatch(
      getForecasts({
        lat,
        lon: long,
      })
    );
  }, [dispatch, lat, long]);

  if (isLoading || nextDaysForecasts === null) {
    return (
      <NoBackgroundWrapper headerType="back" headerAction={() => goBack()}>
        <View flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={theme.colors.accent} />
        </View>
      </NoBackgroundWrapper>
    );
  }

  return (
    <NoBackgroundWrapper
      headerType="back"
      headerAction={() => goBack()}
      headerRefreshAction={getData}
    >
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
