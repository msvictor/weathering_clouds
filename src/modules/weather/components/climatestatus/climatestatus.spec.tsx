import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';
import { weather } from '#mocks/';

import { ClimateStatus } from './climatestatus.component';
import { ClimateStatusProps } from './climatestatus.types';

const TestClimateStatus: React.FC<ClimateStatusProps> = (props) => {
  return fnWrapperInTheme(<ClimateStatus {...props} />);
};

describe('@ClimateStatus: component checks', () => {
  it('should render', () => {
    const component = render(
      <TestClimateStatus weather={weather} city="Araguaína" state="TO" />
    );

    expect(component.toJSON()).toBeTruthy();
  });
});
