import { configure } from '@storybook/react';
// automatically import all files ending in *.storybook.tsx
configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
