import 'styled-components';

import { ThemeType } from '#common/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
