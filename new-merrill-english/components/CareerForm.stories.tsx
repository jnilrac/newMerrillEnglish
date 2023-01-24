import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CareerForm } from './CareerForm';

export default {
    title: "CareerForm",
    component:  CareerForm,
 
} as ComponentMeta<typeof CareerForm>;

const Template: ComponentStory<typeof CareerForm> = (args) => <CareerForm {...args} />;

export const defaultCareerForm = Template.bind({});

defaultCareerForm.args = {
   startMessage: "Join our team of qualified English teachers today.",
   successMessage: "Thank you! A hiring manager will be reviewing your submission soon."
}
defaultCareerForm.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=958%3A2244&t=2r0IXaPYPEVu9cwX-1",
      },
}