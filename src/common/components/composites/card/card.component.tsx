import React from 'react';

import { View } from '#common/components/primitives';

import { CardProps } from './card.types';

const Card: React.FC<CardProps> = ({
  children,
  bg = 'fxLightest',
  shadowOffset = 'md',
  shadowColor = '#000',
}) => {
  return (
    <View
      p="xl"
      rounded="lg"
      bg={bg}
      shadow={shadowOffset}
      shadowColor={shadowColor}
    >
      {children}
    </View>
  );
};

export { Card };
