import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { ForecastListItem } from './forecastlistitem.component';
import { ForecastListItemProps } from './forecastlistitem.types';

const TestForecastListItem: React.FC<ForecastListItemProps> = (props) => {
  return fnWrapperInTheme(<ForecastListItem {...props} />);
};

describe('@ForecastListItem: component checks', () => {
  it('should render', () => {
    const component = render(
      <TestForecastListItem date="test" min="test" max="test" icon="cloud" />
    );

    expect(component.toJSON()).toBeTruthy();
  });
});
