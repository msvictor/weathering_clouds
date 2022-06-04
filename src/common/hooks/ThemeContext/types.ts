import { ThemeType } from '#common/theme';

export type ThemeKey = 'light' | 'dark';

export interface ThemeProps {
  children: React.ReactNode;
}

export interface ThemeContextData {
  theme: ThemeType;
  toggleTheme: () => void;
}
