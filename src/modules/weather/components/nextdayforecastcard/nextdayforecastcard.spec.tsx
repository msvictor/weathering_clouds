import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';
import { forecasts } from '#mocks/';

import { NextDayForecastCard } from './nextdayforecastcard.component';
import { NextDayForecastCardProps } from './nextdayforecastcard.types';

const TestNextDayForecastCard: React.FC<NextDayForecastCardProps> = (props) => {
  return fnWrapperInTheme(<NextDayForecastCard {...props} />);
};

describe('@NextDayForecastCard: component checks', () => {
  it('should render', () => {
    const component = render(
      <TestNextDayForecastCard forecast={forecasts[0]} />
    );

    expect(component.toJSON()).toBeTruthy();
  });
});
