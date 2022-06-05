import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { DefaultWrapper } from './default.wrapper.component';

const TestWrapper: React.FC = (props) => {
  return fnWrapperInTheme(<DefaultWrapper {...props} />);
};

describe('@DefaultWrapper: component checks', () => {
  it('should render', () => {
    const component = render(<TestWrapper />);

    expect(component.toJSON()).toBeTruthy();
  });
});
