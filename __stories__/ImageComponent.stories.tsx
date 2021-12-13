import React from 'react';
import ImageComponent from '@/components/ImageComponent';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ImageComponent',
  component: ImageComponent,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

const Template: ComponentStory<typeof ImageComponent> = (args) => (
  <ImageComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://avatars.githubusercontent.com/u/45786387?s=48&v=4',
};
