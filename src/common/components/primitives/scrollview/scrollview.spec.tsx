import React from 'react';
import { Text } from 'react-native';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { ScrollView } from './scrollview.component';
import { ScrollViewProps } from './scrollview.types';

const TestScrollView: React.FC<ScrollViewProps> = (props) => {
  return fnWrapperInTheme(<ScrollView {...props} />);
};

describe('@ScrollView: component checks', () => {
  it('should render', () => {
    const component = render(<TestScrollView />);

    expect(component.toJSON()).toBeTruthy();
  });

  it('should render component passed to children', () => {
    const component = render(
      <TestScrollView>
        <Text>Hello</Text>
      </TestScrollView>
    );

    expect(component.queryByText('Hello')).toBeTruthy();
  });
});
