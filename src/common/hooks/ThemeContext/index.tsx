import React from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components/native';

import themes, { ThemeType } from '#common/theme';
import { StorageConstants } from '#core/constants';

type ThemeKey = 'light' | 'dark';

interface ThemeProps {
  children: React.ReactNode;
}

interface ThemeContextData {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextData>(
  {} as ThemeContextData
);

const ManageThemeProvider: React.FC<ThemeProps> = ({
  children,
}: ThemeProps) => {
  const deviceTheme = useColorScheme();
  const [theme, setTheme] = React.useState<ThemeType>({
    ...themes.default,
    ...themes[deviceTheme || 'dark'],
  });

  const handleTheme = React.useCallback(async () => {
    const themeSelected = await AsyncStorage.getItem(
      StorageConstants.SELECTED_THEME
    );
    if (themeSelected) {
      setTheme({
        ...themes.default,
        ...themes[themeSelected as ThemeKey],
      });
      return;
    }

    setTheme({
      ...themes.default,
      ...themes[deviceTheme || 'light'],
    });
  }, [deviceTheme]);

  const toggleThemeCallback = React.useCallback(async () => {
    await AsyncStorage.setItem(
      StorageConstants.SELECTED_THEME,
      theme.name === 'light' ? 'dark' : 'light'
    );

    setTheme((currentTheme) => {
      if (currentTheme.name === 'dark') {
        return { ...themes.default, ...themes.light };
      }
      if (currentTheme.name === 'light') {
        return { ...themes.default, ...themes.dark };
      }

      return currentTheme;
    });
  }, [theme.name]);

  const memoizedValue = React.useMemo(() => {
    const value: ThemeContextData = {
      theme,
      toggleTheme: toggleThemeCallback,
    };
    return value;
  }, [theme, toggleThemeCallback]);

  React.useMemo(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setBarStyle(
      theme.name === 'light' ? 'dark-content' : 'light-content'
    );
  }, [theme.name]);

  React.useLayoutEffect(() => {
    handleTheme();
  }, [handleTheme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider');
  }

  return context;
}

export { ManageThemeProvider, useTheme };
