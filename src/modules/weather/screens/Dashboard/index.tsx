import React from 'react';

import { View } from '#common/components/primitives';
import { DefaultWrapper } from '#common/components/wrappers';
import { ClimateStatus, DashboardForecasts } from '#modules/weather/components';

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

      <View flex={1} bg="yellow" />
    </DefaultWrapper>
  );
};

export { Dashboard };
