import React from 'react';

import { ManageThemeProvider as ThemeProvider } from '#common/hooks/ThemeContext';

export function fnWrapperInTheme(
  children: React.ReactNode
): React.ReactElement {
  return <ThemeProvider>{children}</ThemeProvider>;
}
