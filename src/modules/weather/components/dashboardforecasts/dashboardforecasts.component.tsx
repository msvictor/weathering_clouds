import React from 'react';

import { Icon, ScrollView, Text, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';
import { translate } from '#common/utils/Translate';

import { ForecastItem } from './components';
import { DashboardForecastsProps } from './dashboardforecasts.types';

const DashboardForecasts: React.FC<DashboardForecastsProps> = ({
  forecast,
}) => {
  const { theme } = useTheme();

  return (
    <View flex={1}>
      <View
        mx="xl"
        my="md"
        mb="lg"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontWeight="700">{translate('weather.today')}</Text>

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
