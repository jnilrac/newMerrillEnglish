import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PrimaryButton } from "./PrimaryButton";

export default {
    title: "PrimaryButton  ",
    component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

export const buyNow = Template.bind({});

buyNow.args = {
    text: "Buy Now",
    key: "PrimaryButton",
}


buyNow.parameters ={
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=668%3A1948"
    }
}