import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import MyButton from '.'

export default {
  title: 'Draft/MyButton',
  component: MyButton,
} as Meta;

const Template: Story<ComponentProps<typeof MyButton>> = (args) => <MyButton {...args} />;


export const MyButtonDefault = Template.bind({});
MyButtonDefault.args = {
  label: 'Search',
}