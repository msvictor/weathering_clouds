import React from 'react';

import { Text, View } from '#common/components/primitives';

import { ClimateCardInfoProps } from './climatecardinfo.types';

const ClimateCardInfo: React.FC<ClimateCardInfoProps> = ({
  title,
  description,
}) => {
  return (
    <View
      w="48%"
      h="100%"
      rounded="sm"
      borderWidth={0.5}
      borderColor="fxGray"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <View
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="fxGray"
        opacity={0.2}
      />

      <Text fontWeight="700" fontSize="xs" mb="sm">
        {title}
      </Text>

      <Text fontSize="lg">{description}</Text>
    </View>
  );
};

export { ClimateCardInfo };
