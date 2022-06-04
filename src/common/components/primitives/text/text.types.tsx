import { ThemeColorsType, ThemeFontSizeType } from '#common/theme';

type FontWeight = 'light' | 'regular' | 'medium' | 'bold';

type FontStyle = 'italic' | 'normal';

type ContentStyle = 'lowercase' | 'capitalize' | 'uppercase' | 'none';

export interface TextProps {
  children: string;
  contentStyle?: ContentStyle;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  fontSize?: ThemeFontSizeType | number;
  color?: ThemeColorsType;
}

export interface TextBaseProps {
  contentStyle: string;
  fontWeight: number;
  fontStyle: string;
  fontSize: number;
  color: string;
}
