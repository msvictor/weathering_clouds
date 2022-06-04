import styled from 'styled-components/native';

import { ThemeType } from '#common/theme';
import {
  createBorderColorStyles,
  createBorderWidthStyles,
  createRoundedStyles,
  createSpacingStyles,
  getThemeColor,
} from '#common/theme/theme.service';

import { ViewProps } from './view.types';

export const StaticView = styled.View<ViewProps>`
  flex: ${(props) => props.flex ?? 1};
  flex-direction: ${(props) => props.flexDir ?? 'row'};
  flex-wrap: ${(props) => props.flexWrap ?? 'wrap'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  height: ${(props) => props.h ?? 'auto'};
  width: ${(props) => props.w ?? 'auto'};
  min-width: ${(props) => props.minW ?? 'auto'};
  min-height: ${(props) => props.minH ?? 'auto'};
  max-width: ${(props) => props.maxW ?? 'auto'};
  max-height: ${(props) => props.maxH ?? 'auto'};
  align-self: ${(props) => props.alignSelf ?? 'auto'};
  opacity: ${(props) => props.opacity ?? 1};
  overflow: ${(props) => props.overflow ?? 'visible'};
  z-index: ${(props) => props.zIndex ?? 1};
  border-style: ${(props) => props.borderStyle};
  background-color: ${(props) =>
    getThemeColor(
      props.theme.colors,
      props.bg ?? props.theme.colors.background
    )};
  ${(props) => createBorderWidthStyles(props)};
  ${(props) => createSpacingStyles(props, props.theme.spacing)};
  ${(props) => createBorderColorStyles(props, props.theme.colors)};
  ${(props) => createRoundedStyles(props, props.theme.borderRadius)};
`;

export const StaticImageView = styled.ImageBackground<ViewProps>`
  flex: ${(props) => props.flex ?? 1};
  flex-direction: ${(props) => props.flexDir ?? 'row'};
  flex-wrap: ${(props) => props.flexWrap ?? 'wrap'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  height: ${(props) => props.h ?? 'auto'};
  width: ${(props) => props.w ?? 'auto'};
  min-width: ${(props) => props.minW ?? 'auto'};
  min-height: ${(props) => props.minH ?? 'auto'};
  max-width: ${(props) => props.maxW ?? 'auto'};
  max-height: ${(props) => props.maxH ?? 'auto'};
  align-self: ${(props) => props.alignSelf ?? 'auto'};
  opacity: ${(props) => props.opacity ?? 1};
  overflow: ${(props) => props.overflow ?? 'visible'};
  z-index: ${(props) => props.zIndex ?? 1};
  border-style: ${(props) => props.borderStyle};
  background-color: ${(props) =>
    getThemeColor(
      props.theme.colors,
      props.bg ?? props.theme.colors.background
    )};
  ${(props) => createBorderWidthStyles(props)};
  ${(props) => createSpacingStyles(props, props.theme.spacing)};
  ${(props) => createBorderColorStyles(props, props.theme.colors)};
  ${(props) => createRoundedStyles(props, props.theme.borderRadius)};
`;

export const StaticImageContentStyle = (
  props: ViewProps,
  theme: ThemeType['borderRadius']
): Record<string, unknown> => {
  return { ...createRoundedStyles(props, theme) };
};
