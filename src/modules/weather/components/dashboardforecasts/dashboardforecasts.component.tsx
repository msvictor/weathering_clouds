import React from 'react';
import { Pressable } from 'react-native';

import { Icon, ScrollView, Text, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';
import { translate } from '#common/utils/Translate';
import AppRoutesNames from '#core/routes/app/routes.names';
import { NavigationService } from '#core/services';

import { ForecastItem } from './components';
import { DashboardForecastsProps } from './dashboardforecasts.types';

const DashboardForecasts: React.FC<DashboardForecastsProps> = ({
  forecast,
}) => {
  const { theme } = useTheme();
  const { navigate } = NavigationService;

  const handleNavigateToNextForecast = React.useCallback(() => {
    navigate(AppRoutesNames.WEATHER_NEXT_FORECAST);
  }, [navigate]);

  return (
    <View flex={2}>
      <View
        mx="xl"
        my="md"
        mb="lg"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontWeight="700">{translate('weather.today')}</Text>

        <Pressable onPress={handleNavigateToNextForecast}>
          <View flexDir="row" alignItems="center">
            <Text fontWeight="700" color="accent" mr="sm">
              {translate('weather.next-7-days')}
            </Text>
            <Icon
              name="chevron-right"
              color={theme.colors.accent}
              size={theme.fontSize.md}
            />
          </View>
        </Pressable>
      </View>

      <ScrollView horizontal>
        {forecast.map(() => (
          <ForecastItem icon="cloud" temp="26C" time="12AM" />
        ))}
      </ScrollView>
    </View>
  );
};

export { DashboardForecasts };
