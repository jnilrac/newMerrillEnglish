import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SecondaryButton } from "./SecondaryButton";

export default {
    title: "SecondaryButton  ",
    component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = (args) => <SecondaryButton {...args} />;

export const read = Template.bind({});

read.args = {
    text: "Read",
   
}


read.parameters ={
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=729%3A2055"
    }
}

export const careers = Template.bind({});

careers.args = {
    text: "Careers",
}


careers.parameters ={
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=729%3A2064"
    }
}