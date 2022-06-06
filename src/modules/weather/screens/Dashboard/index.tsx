import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';

import { ScrollView, Text, View } from '#common/components/primitives';
import { DefaultWrapper } from '#common/components/wrappers';
import { useTheme } from '#common/hooks';
import { translate } from '#common/utils/Translate';
import { useAppDispatch } from '#core/store/redux.store';
import { locationSelector } from '#modules/_shared/reducers/location/selector';
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

  const { lat, long, city, state, isLocationEnable } =
    useSelector(locationSelector);
  const { weather, forecasts, isLoading } = useSelector(climateSelector);

  const formatDegree = React.useCallback((temp) => {
    return `${temp.toFixed(0)} ${translate('weather.degree-symbol')}`;
  }, []);

  const getData = React.useCallback(async () => {
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
  }, [dispatch, lat, long]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  if (
    !isLocationEnable ||
    isLoading ||
    weather === null ||
    forecasts === null
  ) {
    return (
      <DefaultWrapper>
        <View flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={theme.colors.accent} />
        </View>
      </DefaultWrapper>
    );
  }

  return (
    <DefaultWrapper headerRefreshAction={getData}>
      <ScrollView>
        <ClimateStatus city={city} state={state} weather={weather} />

        <DashboardForecasts forecast={forecasts} />

        <View flex={2} mt="xl">
          <Text mx="xl" fontWeight="700">
            {translate('weather.info')}
          </Text>
          <View flex={1} flexDir="row" justifyContent="space-between" my="md">
            <ClimateCardInfo
              title={translate('weather.min')}
              description={formatDegree(weather.main.temp_min)}
            />
            <ClimateCardInfo
              title={translate('weather.max')}
              description={formatDegree(weather.main.temp_max)}
            />
          </View>
          <View flex={1} flexDir="row" justifyContent="space-between" my="md">
            <ClimateCardInfo
              title={translate('weather.humidity')}
              description={`${weather.main.humidity.toFixed(0)}%`}
            />
            <ClimateCardInfo
              title={translate('weather.wind')}
              description={`${(weather.wind.speed * 3.6).toFixed(0)} km/h`}
            />
          </View>
        </View>
      </ScrollView>
    </DefaultWrapper>
  );
};

export { Dashboard };
