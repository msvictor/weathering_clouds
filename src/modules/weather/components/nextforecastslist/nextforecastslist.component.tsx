import React from 'react';
import { FlatList } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import { View } from '#common/components/primitives';
import { getIconByApiName } from '#common/components/primitives/icon/icon.service';
import { translate } from '#common/utils/Translate';
import { DateService } from '#modules/_shared/services';

import { ForecastListItem } from './components';
import { NextForecastsListProps } from './nextforecastslist.types';

const NextForecastsList: React.FC<NextForecastsListProps> = ({ forecasts }) => {
  const formatDegree = React.useCallback((temp) => {
    return `${temp.toFixed(0)} ${translate('weather.degree-symbol')}`;
  }, []);

  const separator = React.useCallback(
    () => <View h={0.5} bg="fxGray" opacity={0.2} />,
    []
  );

  return (
    <FlatList
      data={forecasts}
      keyExtractor={() => String(Math.random() * 10000)}
      renderItem={({ item }) => (
        <ForecastListItem
          icon={getIconByApiName(item.weather[0].icon)}
          date={`${DateService.getFormattedDate(item.dt, 'E-HH:mm')}h`}
          min={formatDegree(item.main.temp_min)}
          max={formatDegree(item.main.temp_max)}
        />
      )}
      ItemSeparatorComponent={separator}
      contentContainerStyle={{
        paddingBottom: getBottomSpace(),
      }}
    />
  );
};

export { NextForecastsList };
