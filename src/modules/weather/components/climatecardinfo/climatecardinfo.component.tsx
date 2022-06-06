import React from 'react';

import { Card } from '#common/components/composites';
import { Text, View } from '#common/components/primitives';
import { useTheme } from '#common/hooks';

import { ClimateCardInfoProps } from './climatecardinfo.types';

const ClimateCardInfo: React.FC<ClimateCardInfoProps> = ({
  title,
  description,
}) => {
  const { theme } = useTheme();
  return (
    <View w="48%">
      <Card
        bg={`${theme.colors.fxGray}33`}
        shadowColor="text"
        shadowOffset="none"
      >
        <Text fontWeight="700" fontSize="xs" mb="sm" textAlign="center">
          {title}
        </Text>

        <Text fontSize="lg" textAlign="center">
          {description}
        </Text>
      </Card>
    </View>
  );
};

export { ClimateCardInfo };
