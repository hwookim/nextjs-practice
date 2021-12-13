import { MockImage } from '@mocks/MockComponents';
jest.mock('next/image', () => MockImage);

import React from 'react';
import ImageComponent from '@/components/ImageComponent';
import { render } from '@testing-library/react';

test('render image', () => {
  const alt = 'test';
  const src = 'https://avatars.githubusercontent.com/u/45786387?s=48&v=4';
  const { getByAltText } = render(<ImageComponent alt={alt} src={src} />);

  const image = getByAltText(alt);
  expect(image.getAttribute('src')).toEqual(src);
});
