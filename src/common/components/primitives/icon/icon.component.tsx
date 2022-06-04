import React from 'react';

import Icomoon from 'react-native-icomoon';

import IconSet from '#core/utils/icons/icon_set.json';

import { IconProps } from './icon.types';

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  return <Icomoon iconSet={IconSet} name={name} {...rest} />;
};

export { Icon };
