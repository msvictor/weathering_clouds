import React from 'react';

import { render } from '@testing-library/react-native';

import { Icon } from './icon.component';

describe('@box: component checks', () => {
  it('should render', () => {
    const component = render(<Icon name="cloud" />);

    expect(component.toJSON()).toBeTruthy();
  });
});
