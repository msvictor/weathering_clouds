import theme from '#common/theme';

type AppThemeType = typeof theme.default;
type AppColorsType = typeof theme.dark.colors;

export interface ThemeType extends AppThemeType {
  colors: AppColorsType;
}
