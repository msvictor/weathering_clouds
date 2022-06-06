import React from 'react';
import { FlatList } from 'react-native';

import { View } from '#common/components/primitives';

import { ForecastListItem } from './components';
import { NextForecastsListProps } from './nextforecastslist.types';

const NextForecastsList: React.FC<NextForecastsListProps> = ({ forecasts }) => {
  const separator = React.useCallback(
    () => <View h={0.5} bg="fxGray" opacity={0.2} />,
    []
  );

  return (
    <FlatList
      data={forecasts}
      keyExtractor={() => String(Math.random() * 10000)}
      renderItem={() => <ForecastListItem date="TUE" min="15 C" max="24 C" />}
      ItemSeparatorComponent={separator}
    />
  );
};

export { NextForecastsList };
