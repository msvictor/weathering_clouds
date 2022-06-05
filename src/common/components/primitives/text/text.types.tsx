import { TextProps as RNTextProps } from 'react-native';

import {
  ThemeBackgroundPropsType,
  ThemeDimensionPropsType,
  ThemeFlexPropsType,
  ThemeOpacityPropsType,
  ThemeOverflowPropsType,
  ThemeTextPropsType,
  ThemeZIndexPropsType,
  ThemeBorderPropsType,
  ThemeSpacingPropsType,
  ThemeRoundedPropsType,
  ThemePositionPropsType,
} from '#common/theme';

export interface TextProps
  extends Omit<RNTextProps, 'accessibilityRole'>,
    ThemeSpacingPropsType,
    ThemeRoundedPropsType,
    ThemeBorderPropsType,
    ThemeTextPropsType,
    ThemeDimensionPropsType,
    ThemeOverflowPropsType,
    ThemeOpacityPropsType,
    ThemeZIndexPropsType,
    ThemeFlexPropsType,
    ThemePositionPropsType,
    Pick<ThemeBackgroundPropsType, 'bg'>,
    Pick<ThemeFlexPropsType, 'flex'> {
  children: React.ReactNode;
}
