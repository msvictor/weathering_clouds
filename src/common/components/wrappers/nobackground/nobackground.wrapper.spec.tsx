import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { NoBackgroundWrapper } from './nobackground.wrapper.component';

const TestNoBackgroundWrapper: React.FC = (props) => {
  return fnWrapperInTheme(<NoBackgroundWrapper {...props} />);
};

describe('@NoBackgroundWrapper: component checks', () => {
  it('should render', () => {
    const component = render(<TestNoBackgroundWrapper />);

    expect(component.toJSON()).toBeTruthy();
  });
});
