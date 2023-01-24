import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PrimaryOutlineButton } from "./PrimaryOutlineButton";

export default {
    title: "PrimaryOutlineButton",
    component: PrimaryOutlineButton
} as ComponentMeta<typeof PrimaryOutlineButton>;

const Template: ComponentStory<typeof PrimaryOutlineButton> = (args) => <PrimaryOutlineButton {...args}/>

export const login = Template.bind({});

login.args = {
    text: "Login",
    strokeWidth: "border",
    strokeColor:"border-blue-3",
    textColor: "blue-3"
}

login.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=414%3A1850"
    }
}

export const freeTrial = Template.bind({});

freeTrial.args = {
    text: "Start Free Trial",
    strokeWidth: "border-2",
    strokeColor:"border-blue-4",
    textColor: "blue-4"
}

freeTrial.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=673%3A1968"
    }
}

export const getStarted = Template.bind({});

getStarted.args = {
    text: "Get Started",
    strokeWidth: "border-2",
    strokeColor:"border-blue-4",
    textColor: "blue-4"
}

getStarted.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=1048%3A2189&t=1h9N5E8AKa3CEMMg-1"
    }
}