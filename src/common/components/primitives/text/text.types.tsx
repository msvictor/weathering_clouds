import { ThemeColorsType, ThemeFontSizeType } from '#common/theme';

type FontWeight = 'light' | 'regular' | 'medium' | 'bold';

type FontStyle = 'italic' | 'normal';

export interface TextProps {
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  fontSize?: ThemeFontSizeType | number;
  color?: ThemeColorsType;
}

export interface TextBaseProps {
  fontWeight: number;
  fontStyle: string;
  fontSize: number;
  color: string;
}
