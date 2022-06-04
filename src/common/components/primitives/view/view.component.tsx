import React from 'react';

import { useTheme } from '#common/hooks';

import {
  StaticView,
  StaticImageView,
  StaticImageContentStyle,
} from './view.styles';
import { ViewProps } from './view.types';

const View: React.FC<ViewProps> = (incoming) => {
  const { theme } = useTheme();
  const { children, bgImg, bgMode, ...rest } = incoming;

  if (bgImg) {
    return (
      <StaticImageView
        {...rest}
        source={bgImg}
        resizeMode={bgMode}
        imageStyle={StaticImageContentStyle(rest, theme.borderRadius)}
      >
        {children}
      </StaticImageView>
    );
  }

  return <StaticView {...rest}>{children}</StaticView>;
};

export { View };
