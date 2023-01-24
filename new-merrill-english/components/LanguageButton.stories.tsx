import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePageCard } from './HomePageCard';
import { LanguageButton } from './LanguageButton';

export default {
    title: "Language Button",
    component: LanguageButton
 
} as ComponentMeta<typeof LanguageButton>;

const Template: ComponentStory<typeof LanguageButton> = (args) => <LanguageButton {...args} />;

export const regular = Template.bind({});

regular.args = {
    langOptions: [
        {text:"English", key:"en"},
        {text:"Español", key:"es"},
    ], 

}
