import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import Button from '.';

export default {
  title: 'MyComponents/Button',
  component: Button
} as Meta

const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {}