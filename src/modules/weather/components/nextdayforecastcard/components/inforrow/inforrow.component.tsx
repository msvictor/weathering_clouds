import React from 'react';

import { Text, View } from '#common/components/primitives';

import { InfoRowProps } from './inforrow.types';

const InfoRow: React.FC<InfoRowProps> = ({ label, description }) => {
  return (
    <View
      w="38%"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontWeight="bold" fontSize="sm">
        {label}
      </Text>
      <Text fontWeight="bold" fontSize="sm" color="fxGray" opacity={0.5}>
        {description}
      </Text>
    </View>
  );
};

export { InfoRow };
