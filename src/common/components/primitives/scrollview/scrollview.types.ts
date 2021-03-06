import React from 'react';
import { ScrollViewProps as RNScrollViewProps } from 'react-native';

import {
  ThemeBorderPropsType,
  ThemeSpacingPropsType,
  ThemeFlexPropsType,
  ThemeRoundedPropsType,
  ThemeDimensionPropsType,
  ThemeOpacityPropsType,
  ThemeZIndexPropsType,
  ThemeOverflowPropsType,
  ThemeBackgroundPropsType,
  ThemePositionPropsType,
  ThemeShadowPropsType,
} from '#common/theme';

export interface ScrollViewProps
  extends Omit<RNScrollViewProps, 'refreshControl' | 'accessibilityRole'>,
    ThemeBorderPropsType,
    ThemeSpacingPropsType,
    ThemeRoundedPropsType,
    ThemeDimensionPropsType,
    Pick<ThemeBackgroundPropsType, 'bg'>,
    ThemeFlexPropsType,
    ThemeZIndexPropsType,
    ThemeOpacityPropsType,
    ThemePositionPropsType,
    ThemeOverflowPropsType,
    ThemeShadowPropsType {
  children?: React.ReactNode;
}

export interface ScrollViewRef {
  scrollToTop(): void;
}
