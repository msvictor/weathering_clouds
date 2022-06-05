import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { Card } from './card.component';
import { CardProps } from './card.types';

const TestCard: React.FC<CardProps> = (props) => {
  return fnWrapperInTheme(<Card {...props} />);
};

describe('@Card: component checks', () => {
  it('should render', () => {
    const component = render(<TestCard />);

    expect(component.toJSON()).toBeTruthy();
  });
});
