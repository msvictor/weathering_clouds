import React from 'react';

import { Text, View } from '#common/components/primitives';
import { DefaultWrapper } from '#common/components/wrappers';
import { translate } from '#common/utils/Translate';
import {
  ClimateCardInfo,
  ClimateStatus,
  DashboardForecasts,
} from '#modules/weather/components';

const Dashboard: React.FC = () => {
  return (
    <DefaultWrapper>
      <ClimateStatus
        date="Sat, 3 Aug"
        temp="28"
        city="Araguína"
        state="TO"
        sunset="17:30"
        feelsLike="30"
      />

      <DashboardForecasts forecast={['', '', '', '', '']} />

      <View flex={2} my="md">
        <Text mx="xl" fontWeight="700">
          {translate('weather.info')}
        </Text>
        <View flex={1} flexDir="row" justifyContent="space-between" my="md">
          <ClimateCardInfo title="Wind" description="12 km/h" />
          <ClimateCardInfo title="Visibility" description="25 km" />
        </View>
        <View flex={1} flexDir="row" justifyContent="space-between" my="md">
          <ClimateCardInfo title="Humidity" description="55%" />
          <ClimateCardInfo title="UV" description="1" />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export { Dashboard };
