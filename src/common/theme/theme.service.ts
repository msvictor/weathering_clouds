/* eslint-disable @typescript-eslint/no-explicit-any */
import { Platform } from 'react-native';

import { TextProps } from '#common/components/primitives/text/text.types';
import { normalize } from '#common/utils/DynamicRatio';

import { ThemeProps, ThemeType } from './theme.types';

export const getThemeProperty = (
  theme:
    | ThemeType['borderRadius']
    | ThemeType['fontSize']
    | ThemeType['spacing']
    | undefined,
  value: any
): any => {
  if (theme) {
    if (typeof theme[value as keyof typeof theme] !== 'undefined') {
      return theme[value as keyof typeof theme];
    }
  }

  return normalize(value);
};

export const getThemeColor = (
  themeColors: ThemeType['colors'],
  value: string | undefined
): string => {
  if (themeColors && value) {
    if (typeof themeColors[value as keyof typeof themeColors] !== 'undefined') {
      return themeColors[value as keyof typeof themeColors] as string;
    }
  }

  return value as string;
};

export const getFontWeight = (
  themeFontFamily: ThemeType['fontFamily'],
  fontFamily: TextProps['fontFamily'],
  fontWeight: TextProps['fontWeight']
): any => {
  if (themeFontFamily && fontWeight) {
    if (typeof themeFontFamily[fontWeight] !== 'undefined') {
      return Platform.select({ ios: fontWeight, android: 'normal' });
    }
  }

  if (fontFamily && fontWeight) {
    return fontWeight;
  }

  return 'normal';
};

export const getThemeFontFamily = (
  themeFontFamily: ThemeType['fontFamily'],
  fontWeight: TextProps['fontWeight'] = 'normal'
): string | undefined => {
  if (themeFontFamily) {
    if (typeof themeFontFamily[fontWeight] !== 'undefined') {
      return themeFontFamily[fontWeight];
    }
  }

  return undefined;
};

export const createSpacingStyles = (
  props: any,
  theme: ThemeType['spacing']
): Record<string, string> => {
  const propKeys: ThemeProps<string> = {
    p: 'padding',
    pt: 'padding-top',
    pr: 'padding-right',
    pb: 'padding-bottom',
    pl: 'padding-left',
    px: 'padding-horizontal',
    py: 'padding-vertical',
    ps: 'padding-start',
    m: 'margin',
    mt: 'margin-top',
    mr: 'margin-right',
    mb: 'margin-bottom',
    ml: 'margin-left',
    mx: 'margin-horizontal',
    my: 'margin-vertical',
    ms: 'margin-start',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).forEach((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
    }
  });

  return computedStyle;
};

export const createRoundedStyles = (
  props: any,
  theme: ThemeType['borderRadius']
): any => {
  const propKeys: ThemeProps<string | string[]> = {
    rounded: 'border-radius',
    roundedTopLeft: 'border-top-left-radius',
    roundedTopRight: 'border-top-right-radius',
    roundedBottomLeft: 'border-bottom-left-radius',
    roundedBottomRight: 'border-bottom-right-radius',
    roundedTop: ['border-top-left-radius', 'border-top-right-radius'],
    roundedLeft: ['border-top-left-radius', 'border-bottom-left-radius'],
    roundedRight: ['border-top-right-radius', 'border-bottom-right-radius'],
    roundedBottom: ['border-bottom-left-radius', 'border-bottom-right-radius'],
  };

  const computedStyle: any = {};

  Object.keys(propKeys).forEach((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeProperty(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeProperty(theme, props[propKey]);
      }
    }
  });

  return computedStyle;
};

export const createFlexStyles = (props: any): any => {
  const propKeys: ThemeProps<string> = {
    flex: 'flex',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).forEach((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

export const createBorderWidthStyles = (props: any): any => {
  const propKeys: ThemeProps<string> = {
    borderWidth: 'border-width',
    borderStartWidth: 'border-start-width',
    borderEndWidth: 'border-end-width',
    borderTopWidth: 'border-top-width',
    borderLeftWidth: 'border-left-width',
    borderRightWidth: 'border-right-width',
    borderBottomWidth: 'border-bottom-width',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).forEach((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      computedStyle[styleProperty] = props[propKey];
    }
  });

  return computedStyle;
};

export const createBorderColorStyles = (
  props: any,
  theme: ThemeType['colors']
): any => {
  const propKeys: ThemeProps<any> = {
    borderColor: 'border-color',
    borderTopColor: 'border-top-color',
    borderRightColor: 'border-right-color',
    borderLeftColor: 'border-left-color',
    borderBottomColor: 'border-bottom-color',
  };

  const computedStyle: any = {};

  Object.keys(propKeys).forEach((propKey: string) => {
    const styleProperty = propKeys[propKey];

    if (propKey in props) {
      if (styleProperty instanceof Array) {
        styleProperty.forEach((property) => {
          computedStyle[property] = getThemeColor(theme, props[propKey]);
        });
      } else {
        computedStyle[styleProperty] = getThemeColor(theme, props[propKey]);
      }
    }
  });

  return computedStyle;
};

export const createShadowStyles = (props: any, theme: ThemeType): any => {
  let computedStyle: any = {};

  if (props.shadow) {
    computedStyle = {
      ...(theme.shadow &&
        theme.shadow[props.shadow as keyof typeof theme.shadow]),
      shadowColor: getThemeColor(theme.colors, props.shadowColor),
    };
  }

  return computedStyle;
};
