import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ManageThemeProvider as ThemeProvider } from '#common/hooks/ThemeContext';
import AppRoutes from '#core/routes/app';
import { NavigationService } from '#core/services';
import { AppStore, Persistor } from '#core/store/redux.store';

const App: React.FC = () => {
  const [loaded] = useFonts({
    'Ubuntu-Italic': require('#common/assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-Light': require('#common/assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-Regular': require('#common/assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Medium': require('#common/assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-Bold': require('#common/assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={Persistor}>
        <SafeAreaProvider>
          <NavigationContainer
            ref={(nav) => {
              NavigationService.setNavigator(nav);
            }}
          >
            <ThemeProvider>
              <AppRoutes />
            </ThemeProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
