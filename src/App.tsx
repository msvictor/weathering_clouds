import React from 'react';

import { Icon } from '#common/components/primitives';
import { ManageThemeProvider as ThemeProvider } from '#common/hooks/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Icon name="cloud" />
    </ThemeProvider>
  );
};

export default App;
