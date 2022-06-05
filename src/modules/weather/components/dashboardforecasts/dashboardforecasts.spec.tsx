import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { DashboardForecasts } from './dashboardforecasts.component';
import { DashboardForecastsProps } from './dashboardforecasts.types';

const TestDashboardForecasts: React.FC<DashboardForecastsProps> = (props) => {
  return fnWrapperInTheme(<DashboardForecasts {...props} />);
};

describe('@DashboardForecasts: component checks', () => {
  it('should render', () => {
    const component = render(<TestDashboardForecasts forecast={[]} />);

    expect(component.toJSON()).toBeTruthy();
  });
});
