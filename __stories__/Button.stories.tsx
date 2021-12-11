import React from 'react';
import Button from '@/components/Button';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'content',
};
