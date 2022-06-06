import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { useModal, useTheme } from '#common/hooks';
import { useAppDispatch } from '#core/store/redux.store';
import { LocationErrorModal } from '#modules/_shared/components/modals';
import { locationSelector } from '#modules/_shared/reducers/location/selector';
import { getDeviceLocationData } from '#modules/_shared/reducers/location/thunks';

import AppRoutesNames from './routes.names';
import * as Screens from './screens.components';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  const dispatch = useAppDispatch();

  const { theme } = useTheme();
  const { setComponent, blockGestures } = useModal();

  const { isLocationEnable, isLoading } = useSelector(locationSelector);

  React.useEffect(() => {
    (async () => {
      await dispatch(getDeviceLocationData());
    })();
  }, [dispatch, setComponent]);

  React.useLayoutEffect(() => {
    if (!isLocationEnable && !isLoading) {
      blockGestures();
      setComponent(<LocationErrorModal />);
    }
  }, [isLocationEnable, isLoading, blockGestures, setComponent]);

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <App.Screen
        name={AppRoutesNames.WEATHER_DASHBOARD}
        component={Screens.WeatherDashboard}
      />
      <App.Screen
        name={AppRoutesNames.WEATHER_NEXT_FORECAST}
        component={Screens.WeatherNextForecast}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
