import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import Title from '.';

export default {
  title: 'MyComponents/Title',
  component: Title,
} as Meta

const Template: Story<ComponentProps<typeof Title>> = (args) => <Title {...args} />

export const TitleDefault = Template.bind({});
TitleDefault.args = {

}