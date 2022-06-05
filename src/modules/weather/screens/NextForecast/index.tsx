import React from 'react';

import { Text } from '#common/components/primitives';
import { NoBackgroundWrapper } from '#common/components/wrappers';
import { NavigationService } from '#core/services';

const NextForecast: React.FC = () => {
  const { goBack } = NavigationService;

  return (
    <NoBackgroundWrapper headerType="back" headerAction={() => goBack()}>
      <Text>Forecasts</Text>
    </NoBackgroundWrapper>
  );
};

export { NextForecast };
