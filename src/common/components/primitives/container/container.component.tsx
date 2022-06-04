import React from 'react';

import { StaticContainer, ScrollableContainer } from './container.styles';
import { ContainerProps } from './container.types';

const Container: React.FC<ContainerProps> = ({
  children,
  shouldScroll = false,
}) => {
  if (shouldScroll) {
    return <ScrollableContainer>{children}</ScrollableContainer>;
  }

  return <StaticContainer>{children}</StaticContainer>;
};

export { Container };
