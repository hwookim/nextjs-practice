import React from 'react';
import Image, { ImageProps } from 'next/image';

export default function ImageComponent(props: ImageProps): JSX.Element {
  return (
    <Image
      {...props}
      width={props.width || '100%'}
      height={props.width || '100%'}
    />
  );
}
