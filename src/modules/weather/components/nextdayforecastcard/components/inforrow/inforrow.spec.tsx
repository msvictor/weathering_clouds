import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { InfoRow } from './inforrow.component';
import { InfoRowProps } from './inforrow.types';

const TestInfoRow: React.FC<InfoRowProps> = (props) => {
  return fnWrapperInTheme(<InfoRow {...props} />);
};

describe('@InfoRow: component checks', () => {
  it('should render', () => {
    const component = render(<TestInfoRow label="test" description="test" />);

    expect(component.toJSON()).toBeTruthy();
  });
});
