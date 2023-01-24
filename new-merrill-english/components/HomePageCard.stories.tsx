import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePageCard } from './HomePageCard';

export default {
    title: "HomePageCard",
    component:  HomePageCard,
 
} as ComponentMeta<typeof HomePageCard>;

const Template: ComponentStory<typeof HomePageCard> = (args) => <HomePageCard {...args} />;

export const defaultCard = Template.bind({});

defaultCard.args = {
    imgUrl: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    title: "Title"

}
defaultCard.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=231%3A1488",
      },
}