import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { Header } from './header.component';
import { HeaderProps } from './header.types';

const TestHeader: React.FC<HeaderProps> = (props) => {
  return fnWrapperInTheme(<Header {...props} />);
};

describe('@Header: component checks', () => {
  it('should render', () => {
    const component = render(<TestHeader type="default" title="test" />);

    expect(component.toJSON()).toBeTruthy();
  });
});
