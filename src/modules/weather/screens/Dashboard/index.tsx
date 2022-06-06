import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';

import { Text, View } from '#common/components/primitives';
import { DefaultWrapper } from '#common/components/wrappers';
import { useTheme } from '#common/hooks';
import { translate } from '#common/utils/Translate';
import { useAppDispatch } from '#core/store/redux.store';
import { locationSelector } from '#modules/_shared/reducers/location/selector';
import { DateService } from '#modules/_shared/services';
import {
  ClimateCardInfo,
  ClimateStatus,
  DashboardForecasts,
} from '#modules/weather/components';
import { climateSelector } from '#modules/weather/reducers/climate/selector';
import {
  getCurrentWeather,
  getForecasts,
} from '#modules/weather/reducers/climate/thunks';

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const { theme } = useTheme();

  const { lat, long, city, state } = useSelector(locationSelector);
  const { weather, forecasts, isLoading } = useSelector(climateSelector);

  React.useEffect(() => {
    (async () => {
      await Promise.all([
        dispatch(
          getCurrentWeather({
            lat,
            lon: long,
          })
        ),
        dispatch(
          getForecasts({
            lat,
            lon: long,
          })
        ),
      ]);
    })();
  }, [dispatch, lat, long]);

  if (isLoading) {
    return (
      <DefaultWrapper>
        <View flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={theme.colors.accent} />
        </View>
      </DefaultWrapper>
    );
  }

  return (
    <DefaultWrapper>
      <ClimateStatus
        city={city}
        state={state}
        temp={weather?.main.temp.toFixed(0) ?? ''}
        feelsLike={weather?.main.feels_like.toFixed(0) ?? ''}
        sunset={DateService.getFormattedDate(weather?.dt ?? 0, 'HH:mm')}
        date={DateService.getFormattedDate(weather?.dt ?? 0, 'EE, d MMM')}
      />

      <DashboardForecasts forecast={forecasts ?? []} />

      <View flex={2} my="md">
        <Text mx="xl" fontWeight="700">
          {translate('weather.info')}
        </Text>
        <View flex={1} flexDir="row" justifyContent="space-between" my="md">
          <ClimateCardInfo
            title={translate('weather.min')}
            description={`${weather?.main.temp_min.toFixed(0)} ${translate(
              'weather.degree-symbol'
            )}`}
          />
          <ClimateCardInfo
            title={translate('weather.max')}
            description={`${weather?.main.temp_max.toFixed(0)} ${translate(
              'weather.degree-symbol'
            )}`}
          />
        </View>
        <View flex={1} flexDir="row" justifyContent="space-between" my="md">
          <ClimateCardInfo
            title={translate('weather.humidity')}
            description={`${weather?.main.humidity.toFixed(0)}%`}
          />
          <ClimateCardInfo
            title={translate('weather.humidity')}
            description={`${weather?.wind.speed.toFixed(0)} km/h`}
          />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export { Dashboard };
