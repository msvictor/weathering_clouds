import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { ForecastItem } from './forecastitem.component';
import { ForecastItemProps } from './forecastitem.types';

const TestForecastItem: React.FC<ForecastItemProps> = (props) => {
  return fnWrapperInTheme(<ForecastItem {...props} />);
};

describe('@ForecastItem: component checks', () => {
  it('should render', () => {
    const component = render(
      <TestForecastItem icon="cloud" temp="26C" time="12AM" />
    );

    expect(component.toJSON()).toBeTruthy();
  });
});
