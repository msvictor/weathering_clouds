import React from 'react';

import { render } from '@testing-library/react-native';

import { fnWrapperInTheme } from '#common/tests';

import { LocationErrorModal } from './locationerror.component';

const TestLocationErrorModal: React.FC = (props) => {
  return fnWrapperInTheme(<LocationErrorModal {...props} />);
};

describe('@LocationErrorModal: component checks', () => {
  it('should render', () => {
    const component = render(<TestLocationErrorModal />);

    expect(component.toJSON()).toBeTruthy();
  });
});
