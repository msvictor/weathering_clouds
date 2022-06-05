import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { ClimateStatus } from './climatestatus.component';
import { ClimateStatusProps } from './climatestatus.types';

const TestClimateStatus: React.FC<ClimateStatusProps> = (props) => {
  return fnWrapperInTheme(<ClimateStatus {...props} />);
};

describe('@ClimateStatus: component checks', () => {
  it('should render', () => {
    const component = render(
      <TestClimateStatus
        date="Sat, 3 Aug"
        temp="28"
        city="Araguína"
        state="TO"
        sunset="17:30"
        feelsLike="30"
      />
    );

    expect(component.toJSON()).toBeTruthy();
  });
});
