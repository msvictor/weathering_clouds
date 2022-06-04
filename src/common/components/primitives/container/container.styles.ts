import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const StaticContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};

  padding: ${({ theme }) => theme.spacing.lg}px;
  padding-top: ${({ theme }) => theme.spacing.xs + getStatusBarHeight(true)}px;
`;

export const ScrollableContainer = styled.ScrollView.attrs({
  scrollEnabled: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: {
    flex: 1,
    flexGrow: 1,
    paddingBottom: getBottomSpace(),
  },
})`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};

  padding: ${({ theme }) => theme.spacing.lg}px;
  padding-top: ${({ theme }) => theme.spacing.xs + getStatusBarHeight(true)}px;
`;
