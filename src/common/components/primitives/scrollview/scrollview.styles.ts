import styled from 'styled-components/native';

import {
  createBorderColorStyles,
  createBorderWidthStyles,
  createRoundedStyles,
  createSpacingStyles,
  getThemeColor,
} from '#common/theme/theme.service';

import { ScrollViewProps } from './scrollview.types';

export const ScrollableView = styled.ScrollView<ScrollViewProps>`
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDir};
  flex-wrap: ${(props) => props.flexWrap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  min-width: ${(props) => props.minW};
  min-height: ${(props) => props.minH};
  align-self: ${(props) => props.alignSelf};
  max-width: ${(props) => props.maxW};
  max-height: ${(props) => props.maxH};
  opacity: ${(props) => props.opacity ?? 1};
  overflow: ${(props) => props.overflow};
  z-index: ${(props) => props.zIndex ?? 1};
  border-style: ${(props) => props.borderStyle};
  background-color: ${(props) => getThemeColor(props.theme.colors, props.bg)};
  ${(props) => createBorderWidthStyles(props)};
  ${(props) => createSpacingStyles(props, props.theme.spacing)};
  ${(props) => createBorderColorStyles(props, props.theme.colors)};
  ${(props) => createRoundedStyles(props, props.theme.borderRadius)};
`;
