import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import SpriteWindow from '.';

export default {
  title: 'MyComponents/SpriteWindow',
  component: SpriteWindow,
} as Meta

const Template: Story<ComponentProps<typeof SpriteWindow>> = (args) => <SpriteWindow {...args} />;

export const SpriteWindowDefault = Template.bind({});
SpriteWindowDefault.args = {}