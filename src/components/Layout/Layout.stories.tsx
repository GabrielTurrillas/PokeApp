import React, { ComponentProps } from "react";
import { Story, Meta } from '@storybook/react';
import Layout from '.';
import Title from '../Title'
import InfoSection from "../InfoSection";
import SpriteWindow from '../SpriteWindow';
import Button from '../Button';
import Input from '../Input';

export default {
  title: 'MyComponents/Layout',
  component: Layout,
} as Meta

const Template: Story<ComponentProps<typeof Layout>> = (args) => <Layout {...args} />;

export const LayoutDefault = Template.bind({});
LayoutDefault.args = {
  backgroundColor: [249, 228, 80],
  title: <Title

  />,
  infoSection: <InfoSection />,
  spriteWindow: <SpriteWindow />,
  button: <Button />,
  input: <Input />,
}