import { ms } from '#common/utils/ScalingUtils';

export default {
  name: 'default',
  fontSize: {
    xs: ms(10),
    sm: ms(12),
    md: ms(14),
    lg: ms(16),
    xl: ms(18),
    '2xl': ms(20),
    '3xl': ms(24),
    '4xl': ms(28),
    '5xl': ms(32),
    '6xl': ms(64),
  },

  fontFamily: {
    bold: 'Ubuntu-Bold',
    italic: 'Ubuntu-Italic',
    normal: 'Ubuntu-Regular',
    300: 'Ubuntu-Light',
    400: 'Ubuntu-Regular',
    500: 'Ubuntu-Medium',
    700: 'Ubuntu-Bold',
  },

  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 10,
    '2xl': 12,
    '4xl': 30,
    circle: 99999,
  },

  spacing: {
    none: 0,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 24,
    '2xl': 32,
    '3xl': 64,
  },
};
