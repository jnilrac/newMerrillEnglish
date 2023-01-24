import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogCard } from './BlogCard';

export default {
    title: "BlogCard",
    component:  BlogCard,
 
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args} />;

export const card = Template.bind({});

card.args = {
    imgUrl: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in gravida mi. In tincidunt tincidunt arcu, ac placerat ipsum dapibus at. Nunc elementum lacus a mollis tempor. Etiam nec magna dui. Praesent sed nulla a ex semper luctus non sit amet libero. Duis tristique sit amet magna ultrices consequat. In lobortis pharetra risus sed rhoncus. Etiam dapibus tellus et dignissim pulvinar. Aenean et pellentesque nisl. Maecenas elementum, felis sit amet placerat aliquam, tortor diam bibendum diam, eget tristique ligula enim non arcu.",
    title: "Title",
    key: "blog-post-1",
    postUrl:"/blog-post-1",
    buttonText: "Read"

}
card.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=741%3A2098",
      },
}