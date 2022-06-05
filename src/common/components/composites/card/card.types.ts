import React from 'react';

import { ThemeColorsType, ThemeShadowSizingPropsType } from '#common/theme';

export interface CardProps {
  children?: React.ReactNode;
  bg?: ThemeColorsType | string;
  shadowOffset?: ThemeShadowSizingPropsType;
  shadowColor?: ThemeColorsType | string;
}
