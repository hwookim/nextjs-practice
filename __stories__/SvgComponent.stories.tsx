import React from 'react';
import SvgComponent from '@/components/SvgComponent';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'SvgComponent',
  component: SvgComponent,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

const Template: ComponentStory<typeof SvgComponent> = (args) => (
  <SvgComponent {...args} />
);

export const Default = Template.bind({});
