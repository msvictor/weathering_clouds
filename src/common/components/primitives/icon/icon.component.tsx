import React from 'react';

import Icomoon from 'react-native-icomoon';

import IconSet from '#core/utils/icon_set.json';

import { IconProps } from './icon.type';

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  return <Icomoon iconSet={IconSet} name={name} {...rest} />;
};

export { Icon };
