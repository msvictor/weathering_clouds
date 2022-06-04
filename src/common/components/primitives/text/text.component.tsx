import React, { memo } from 'react';

import { useTheme } from '#common/hooks';
import normalize from '#common/utils/DynamicRatio';

import { TextBase } from './text.styles';
import { TextProps } from './text.types';

const Text: React.FC<TextProps> = ({
  children,
  color = 'text',
  fontSize = 'md',
  fontStyle = 'normal',
  fontWeight = 'regular',
  contentStyle = 'none',
}) => {
  const { theme } = useTheme();

  const { convertedColor, convertedFontSize, convertedFontWeight } =
    React.useMemo(() => {
      const tColor = theme.colors[color];
      const tSize =
        typeof fontSize === 'number'
          ? normalize(fontSize)
          : theme.fontSize[fontSize];
      const tWeight = {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      }[fontWeight];

      return {
        convertedColor: tColor,
        convertedFontSize: tSize,
        convertedFontWeight: tWeight,
      };
    }, [color, fontSize, fontWeight, theme.colors, theme.fontSize]);

  return (
    <TextBase
      contentStyle={contentStyle}
      fontWeight={convertedFontWeight}
      fontStyle={fontStyle}
      fontSize={convertedFontSize}
      color={convertedColor}
    >
      {children}
    </TextBase>
  );
};

const mText = memo(Text);

export { mText as Text };
