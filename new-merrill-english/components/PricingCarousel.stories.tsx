import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingCarousel } from './PricingCarousel';

export default {
    title: "PricingCarousel",
    component:  PricingCarousel,
 
} as ComponentMeta<typeof PricingCarousel>;

const Template: ComponentStory<typeof PricingCarousel> = (args) => <PricingCarousel {...args} />;

export const pricingCarousel = Template.bind({});

pricingCarousel.args = {
    
     

}
pricingCarousel.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=828%3A1867&t=byPToVJ5WxbmFh5E-1",
      },
}