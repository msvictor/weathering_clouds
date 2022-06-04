import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { Text } from './text.component';
import { TextProps } from './text.types';

const TestText: React.FC<TextProps> = (props) => {
  return fnWrapperInTheme(<Text {...props} />);
};

describe('@Text: component checks', () => {
  it('should render', () => {
    const component = render(<TestText />);

    expect(component.toJSON()).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const component = render(<TestText>Hello</TestText>);

    expect(component.queryByText('Hello')).toBeTruthy();
  });
});
