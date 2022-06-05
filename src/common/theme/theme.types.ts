import { ImageSourcePropType as RNImageSourcePropType } from 'react-native';

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
export type ThemeFontSizingType =
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
export type ThemeSpacingSizingType =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl';
export type ThemeBorderRadiusSizingType =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '4xl'
  | 'circle';

export type ThemeTextFontWeightType =
  | 'normal'
  | 'bold'
  | '300'
  | '400'
  | '500'
  | '700';

export type ThemeShadowSizingPropsType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'none';

export interface ThemeSpacingPropsType {
  m?: ThemeSpacingSizingType | number;
  mt?: ThemeSpacingSizingType | number;
  mr?: ThemeSpacingSizingType | number;
  mb?: ThemeSpacingSizingType | number;
  ml?: ThemeSpacingSizingType | number;
  mx?: ThemeSpacingSizingType | number;
  my?: ThemeSpacingSizingType | number;
  ms?: ThemeSpacingSizingType | number;
  p?: ThemeSpacingSizingType | number;
  pt?: ThemeSpacingSizingType | number;
  pr?: ThemeSpacingSizingType | number;
  pb?: ThemeSpacingSizingType | number;
  pl?: ThemeSpacingSizingType | number;
  px?: ThemeSpacingSizingType | number;
  py?: ThemeSpacingSizingType | number;
  ps?: ThemeSpacingSizingType | number;
}

export interface ThemeFlexPropsType {
  flex?: number;
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  flexShrink?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
}

export interface ThemeTextPropsType {
  color?: ThemeColorsType | string;
  fontSize?: ThemeFontSizingType | number;
  textDecorLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  fontStyle?: 'normal' | 'italic';
  textDecorColor?: string;
  fontWeight?: ThemeTextFontWeightType;
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  letterSpacing?: number;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
  textDecorationColor?: string;
}

export interface ThemeBorderPropsType {
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderLeftWidth?: number;
  borderBottomWidth?: number;
  borderStartWidth?: number;
  borderEndWidth?: number;
  borderStyle?: 'solid' | 'dotted' | 'dashed';
}

export interface ThemeRoundedPropsType {
  rounded?: ThemeBorderRadiusSizingType | number;
  roundedTopLeft?: ThemeBorderRadiusSizingType | number;
  roundedTopRight?: ThemeBorderRadiusSizingType | number;
  roundedBottomLeft?: ThemeBorderRadiusSizingType | number;
  roundedBottomRight?: ThemeBorderRadiusSizingType | number;
  roundedTop?: ThemeBorderRadiusSizingType | number;
  roundedLeft?: ThemeBorderRadiusSizingType | number;
  roundedRight?: ThemeBorderRadiusSizingType | number;
  roundedBottom?: ThemeBorderRadiusSizingType | number;
}

export interface ThemeDimensionPropsType {
  minH?: number | string;
  minW?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  h?: number | string;
  w?: number | string;
}

export interface ThemePositionPropsType {
  position?: 'absolute' | 'relative';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export interface ThemeBackgroundPropsType {
  bg?: string;
  bgImg?: RNImageSourcePropType;
  bgMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
}

export interface ThemeShadowPropsType {
  shadow?: ThemeShadowSizingPropsType | number;
  shadowColor?: string;
}

export interface ThemeOpacityPropsType {
  opacity?: number;
}

export interface ThemeColorsPropsType {
  color?: ThemeColorsType;
}

export interface ThemeZIndexPropsType {
  zIndex?: number;
}

export interface ThemeOverflowPropsType {
  overflow?: 'hidden' | 'visible' | 'scroll';
}

export type ThemeProps<T> = {
  [name: string]: T;
};

export interface ThemeType extends AppThemeType {
  colors: AppColorsType;
}
