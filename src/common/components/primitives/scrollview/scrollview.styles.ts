import styled from 'styled-components/native';

import {
  createBorderColorStyles,
  createBorderWidthStyles,
  createRoundedStyles,
  createSpacingStyles,
  createShadowStyles,
  getThemeColor,
} from '#common/theme/theme.service';

import { ScrollViewProps } from './scrollview.types';

export const ScrollableView = styled.ScrollView<ScrollViewProps>`
  ${(props) => {
    let style = {};
    if (props.flex) {
      style = { ...style, flex: props.flex };
    }
    if (props.flexDir) {
      style = { ...style, 'flex-direction': props.flexDir };
    }
    if (props.flexWrap) {
      style = { ...style, 'flex-wrap': props.flexWrap };
    }
    if (props.alignItems) {
      style = { ...style, 'align-items': props.alignItems };
    }
    if (props.justifyContent) {
      style = { ...style, 'justify-content': props.justifyContent };
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
    if (props.alignSelf) {
      style = { ...style, 'align-self': props.alignSelf };
    }
    if (props.opacity) {
      style = { ...style, opacity: props.opacity };
    }
    if (props.overflow) {
      style = { ...style, overflow: props.overflow };
    }
    if (props.zIndex) {
      style = { ...style, 'z-index': props.zIndex.toString() };
    }
    if (props.borderStyle) {
      style = { ...style, 'border-style': props.borderStyle };
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
  ${(props) => createShadowStyles(props, props.theme)};
`;
