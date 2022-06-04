import React from 'react';
import { Text } from 'react-native';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { View } from './view.component';
import { ViewProps } from './view.types';

const TestView: React.FC<ViewProps> = (props) => {
  return fnWrapperInTheme(<View {...props} />);
};

describe('@View: component checks', () => {
  it('should render', () => {
    const component = render(<TestView />);

    expect(component.toJSON()).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const component = render(
      <TestView>
        <Text>Hello</Text>
      </TestView>
    );

    expect(component.queryByText('Hello')).toBeTruthy();
  });
});
