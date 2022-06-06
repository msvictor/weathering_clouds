import React from 'react';

import { View, Text, Icon } from '#common/components/primitives';
import { useTheme } from '#common/hooks';
import { translate } from '#common/utils/Translate';

const LocationErrorModal: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View p="xl" flexDir="column" alignItems="center" justifyContent="center">
      <View
        p="sm"
        rounded="circle"
        bg="fxLightest"
        borderWidth={0.5}
        borderColor="accent"
      >
        <Icon
          name="navigation"
          size={theme.fontSize['5xl']}
          color={theme.colors.accent}
        />
      </View>

      <Text textAlign="center" fontSize="sm" mt="md">
        {translate('location.permission-denied')}
      </Text>
    </View>
  );
};

export { LocationErrorModal };
