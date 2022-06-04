import React from 'react';
import { Text } from 'react-native';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { Container } from './container.component';
import { ContainerProps } from './container.types';

const TestContainer: React.FC<ContainerProps> = (props) => {
  return fnWrapperInTheme(<Container {...props} />);
};

describe('@Container: component checks', () => {
  it('should render', () => {
    const component = render(<TestContainer />);

    expect(component.toJSON()).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const component = render(
      <TestContainer>
        <Text>Hello</Text>
      </TestContainer>
    );

    expect(component.queryByText('Hello')).toBeTruthy();
  });

  it('should render scrollable component', () => {
    const component = render(<TestContainer shouldScroll />).toJSON();

    expect(component?.props).toHaveProperty('scrollEnabled', true);
  });
});
