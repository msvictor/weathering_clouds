import theme from '#common/theme';

type AppThemeType = typeof theme.default;
type AppColorsType = typeof theme.dark.colors;

export type ThemeColorsType =
  | 'fxYellow'
  | 'fxGray'
  | 'fxLightBlue'
  | 'fxLightest'
  | 'fxDarkest'
  | 'background'
  | 'text'
  | 'accent';
export type ThemeSpacingType =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';
export type ThemeFontSizeType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';
export type ThemeBorderRadiusType =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | '2lg'
  | 'xl'
  | '2xl'
  | 'circle';
export interface ThemeType extends AppThemeType {
  colors: AppColorsType;
}
