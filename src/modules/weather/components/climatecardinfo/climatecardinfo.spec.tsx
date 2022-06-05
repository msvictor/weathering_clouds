import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { ClimateCardInfo } from './climatecardinfo.componetn';
import { ClimateCardInfoProps } from './climatecardinfo.types';

const TestClimateCardInfo: React.FC<ClimateCardInfoProps> = (props) => {
  return fnWrapperInTheme(<ClimateCardInfo {...props} />);
};

describe('@ClimateCardInfo: component checks', () => {
  it('should render', () => {
    const component = render(<TestClimateCardInfo title="a" description="a" />);

    expect(component.toJSON()).toBeTruthy();
  });
});
