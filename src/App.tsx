import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ManageThemeProvider as ThemeProvider } from '#common/hooks/ThemeContext';
import AppRoutes from '#core/routes/app';
import { AppStore, Persistor } from '#core/store/redux.store';

const App: React.FC = () => {
  return (
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={Persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
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
