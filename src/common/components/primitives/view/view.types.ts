import React from 'react';
import { ViewProps as RNViewProps } from 'react-native';

import {
  ThemeBorderPropsType,
  ThemeSpacingPropsType,
  ThemeFlexPropsType,
  ThemeRoundedPropsType,
  ThemeDimensionPropsType,
  ThemeBackgroundPropsType,
  ThemeOpacityPropsType,
  ThemeZIndexPropsType,
  ThemeOverflowPropsType,
  ThemePositionPropsType,
} from '#common/theme';

export interface ViewProps
  extends Omit<RNViewProps, 'accessibilityRole'>,
    ThemeBorderPropsType,
    ThemeSpacingPropsType,
    ThemeRoundedPropsType,
    ThemeDimensionPropsType,
    ThemeBackgroundPropsType,
    ThemeFlexPropsType,
    ThemeZIndexPropsType,
    ThemeOpacityPropsType,
    ThemePositionPropsType,
    ThemeOverflowPropsType {
  children?: React.ReactNode;
}
