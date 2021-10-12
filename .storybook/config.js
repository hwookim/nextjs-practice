import { configure } from '@storybook/react';
// automatically import all files ending in *.storybook.tsx
configure(require.context('../__stories__', true, /\.stories\.tsx?$/), module);
