import React, { SVGAttributes } from 'react';
import Icon from '@/assets/icon/Icon.svg';

export default function SvgComponent(
  props: SVGAttributes<SVGElement>,
): JSX.Element {
  return <Icon {...props} />;
}
