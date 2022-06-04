import React from 'react';

import { TextBase } from './text.styles';
import { TextProps } from './text.types';

const Text: React.FC<TextProps> = (incoming) => {
  const { children, ...rest } = incoming;

  return (
    <TextBase {...rest} allowFontScaling={false}>
      {children}
    </TextBase>
  );
};

export { Text };
