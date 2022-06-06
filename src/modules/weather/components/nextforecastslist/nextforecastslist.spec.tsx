import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { NextForecastsList } from './nextforecastslist.component';
import { NextForecastsListProps } from './nextforecastslist.types';

const TestNextForecastsList: React.FC<NextForecastsListProps> = (props) => {
  return fnWrapperInTheme(<NextForecastsList {...props} />);
};

describe('@NextForecastsList: component checks', () => {
  it('should render', () => {
    const component = render(<TestNextForecastsList forecasts={['']} />);

    expect(component.toJSON()).toBeTruthy();
  });
});
