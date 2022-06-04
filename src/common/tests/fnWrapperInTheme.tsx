import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import theme from '#common/theme';

export function fnWrapperInTheme(
  children: React.ReactNode
): React.ReactElement {
  return (
    <ThemeProvider theme={{ ...theme.default, ...theme.dark }}>
      {children}
    </ThemeProvider>
  );
}
