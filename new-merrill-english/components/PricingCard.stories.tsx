import React from "react";PricingCard
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "next/link";
import { PricingCard } from "./PricingCard";

export default {
    title: "PricingCard  ",
    component: PricingCard,
} as ComponentMeta<typeof PricingCard>;

const Template: ComponentStory<typeof PricingCard> = (args) => <PricingCard {...args} />;

export const card = Template.bind({});

card.args = {
   classesPerMonth:"4 Classes per Month",
   price: "$55",
   pricePerClass: "$13.75 / class",
   buyUrl: "/buy-now",
   trialUrl: "/free-trial",
   buyButtonText: "Buy Now",
   trialButtonText: "Start Free Trial"
}


card.parameters ={
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=691%3A1978"
    }
}