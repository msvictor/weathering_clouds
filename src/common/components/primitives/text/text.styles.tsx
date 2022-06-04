import styled from 'styled-components/native';

import { TextBaseProps } from './text.types';

export const TextBase = styled.Text<TextBaseProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  text-transform: ${(props) => props.contentStyle}; ;
`;
