import React, { ComponentProps } from "react";
import { Story, Meta } from '@storybook/react';
import InfoSection from ".";

export default {
  title: 'MyComponents/InfoSection',
  component: InfoSection,
} as Meta

const Template: Story<ComponentProps<typeof InfoSection>> = (args) => <InfoSection {...args} />;

export const InfoSectionDefault = Template.bind({});
InfoSectionDefault.args = {}