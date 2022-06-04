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
    Pick<ThemeBackgroundPropsType, 'bg'>,
    Pick<ThemeFlexPropsType, 'flex'> {
  children: React.ReactNode;
}
