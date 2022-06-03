import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Icon } from '#common/components/primitives';
import { ManageThemeProvider as ThemeProvider } from '#common/hooks/ThemeContext';
import { AppStore, Persistor } from '#core/store/redux.store';

const App: React.FC = () => {
  return (
    <Provider store={AppStore}>
      <PersistGate loading={null} persistor={Persistor}>
        <ThemeProvider>
          <Icon name="cloud" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
