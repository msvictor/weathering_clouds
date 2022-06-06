import { HeaderType } from '#common/components/composites/header/header.types';

export interface DefaultWrapperProps {
  headerTitle?: string;
  headerType?: HeaderType;
  headerAction?: () => void;
  headerRefreshAction?: () => void;
}
