import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from '#common/hooks';

import AppRoutesNames from './routes.names';
import * as Screens from './screens.components';

const App = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  const { theme } = useTheme();
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
