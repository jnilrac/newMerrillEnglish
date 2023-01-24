import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { GetStartedButton } from "./GetStartedButton";

export default {
    title: "GetStartedButton",
    component: GetStartedButton,
} as ComponentMeta<typeof GetStartedButton>;

const Template: ComponentStory<typeof GetStartedButton> = (args) => <GetStartedButton {...args} />;

export const regular = Template.bind({});

regular.args = {
    text: "Get Started Now",
    
}


regular.parameters ={
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=307%3A1754"
    }
}