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
  color: ${(props) =>
    getThemeColor(props.theme.colors, props.color) ?? props.theme.colors.text};
  font-size: ${(props) =>
    getThemeProperty(
      props.theme.fontSize,
      props.fontSize ?? props.theme.fontSize.md
    )}px;
  font-weight: ${(props) =>
    getFontWeight(props.theme.fontFamily, props.fontFamily, props.fontWeight)};
  font-family: ${(props) =>
    getThemeFontFamily(props.theme.fontFamily, props.fontWeight)};

  ${(props) => {
    let style = {};
    if (props.flex) {
      style = { ...style, flex: props.flex };
    }
    if (props.overflow) {
      style = { ...style, overflow: props.overflow };
    }
    if (props.h) {
      style = { ...style, height: props.h };
    }
    if (props.w) {
      style = { ...style, width: props.w };
    }
    if (props.minH) {
      style = { ...style, 'min-height': props.minH };
    }
    if (props.minW) {
      style = { ...style, 'min-width': props.minW };
    }
    if (props.maxH) {
      style = { ...style, 'max-height': props.maxH };
    }
    if (props.maxW) {
      style = { ...style, 'max-width': props.maxW };
    }
    if (props.opacity) {
      style = { ...style, opacity: props.opacity };
    }
    if (props.textDecorLine) {
      style = { ...style, 'text-decoration-line': props.textDecorLine };
    }
    if (props.textDecorStyle) {
      style = { ...style, 'text-decoration-style': props.textDecorStyle };
    }
    if (props.textDecorColor) {
      style = {
        ...style,
        'text-decoration-color': getThemeColor(
          props.theme.colors,
          props.textDecorColor
        ),
      };
    }
    if (props.letterSpacing) {
      style = { ...style, 'letter-spacing': props.letterSpacing };
    }
    if (props.fontStyle) {
      style = { ...style, 'font-style': props.fontStyle };
    }
    if (props.lineHeight) {
      style = { ...style, 'line-height': props.lineHeight };
    }
    if (props.textAlign) {
      style = { ...style, 'text-align': props.textAlign };
    }
    if (props.textTransform) {
      style = { ...style, 'text-transform': props.textTransform };
    }
    if (props.position) {
      style = { ...style, position: props.position };
    }
    if (props.top) {
      style = { ...style, top: props.top };
    }
    if (props.right) {
      style = { ...style, right: props.right };
    }
    if (props.bottom) {
      style = { ...style, bottom: props.bottom };
    }
    if (props.left) {
      style = { ...style, left: props.left };
    }
    if (props.bg) {
      style = {
        ...style,
        'background-color': getThemeColor(props.theme.colors, props.bg),
      };
    }

    return style;
  }}

  ${(props) => createBorderWidthStyles(props)};
  ${(props) => createSpacingStyles(props, props.theme.spacing)};
  ${(props) => createBorderColorStyles(props, props.theme.colors)};
  ${(props) => createRoundedStyles(props, props.theme.borderRadius)};
`;
