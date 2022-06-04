import styled from 'styled-components/native';

import {
  createBorderColorStyles,
  createBorderWidthStyles,
  createRoundedStyles,
  createSpacingStyles,
  getFontWeight,
  getThemeColor,
  getThemeFontFamily,
  getThemeProperty,
} from '#common/theme/theme.service';

import { TextProps } from './text.types';

export const TextBase = styled.Text<TextProps>`
  height: ${(props) => props.h ?? 'auto'};
  width: ${(props) => props.w ?? 'auto'};
  min-height: ${(props) => props.minH ?? 'auto'};
  min-width: ${(props) => props.minW ?? 'auto'};
  max-height: ${(props) => props.maxH ?? 'auto'};
  max-width: ${(props) => props.maxW ?? 'auto'};
  flex: ${(props) => props.flex ?? 'auto'};
  overflow: ${(props) => props.overflow ?? 'visible'};
  opacity: ${(props) => props.opacity ?? 1};
  text-decoration-line: ${(props) => props.textDecorLine ?? 'none'};
  text-decoration-style: ${(props) => props.textDecorStyle ?? 'solid'};
  letter-spacing: ${(props) => props.letterSpacing ?? 0};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  line-height: ${(props) => props.lineHeight ?? props.theme.fontSize.md}px;
  text-align: ${(props) => props.textAlign ?? 'auto'};
  text-transform: ${(props) => props.textTransform ?? 'none'};
  background-color: ${(props) =>
    getThemeColor(props.theme.colors, props.bg) ?? 'transparent'};
  color: ${(props) =>
    getThemeColor(props.theme.colors, props.color) ?? props.theme.colors.text};
  font-size: ${(props) =>
    getThemeProperty(
      props.theme.fontSize,
      props.fontSize ?? props.theme.fontSize.md
    )}px;
  text-decoration-color: ${(props) =>
    getThemeColor(props.theme.colors, props.textDecorColor ?? 'transparent')};
  font-weight: ${(props) =>
    getFontWeight(props.theme.fontFamily, props.fontFamily, props.fontWeight)};
  font-family: ${(props) =>
    getThemeFontFamily(props.theme.fontFamily, props.fontWeight)};
  ${(props) => createBorderWidthStyles(props)};
  ${(props) => createSpacingStyles(props, props.theme.spacing)};
  ${(props) => createBorderColorStyles(props, props.theme.colors)};
  ${(props) => createRoundedStyles(props, props.theme.borderRadius)};
`;
