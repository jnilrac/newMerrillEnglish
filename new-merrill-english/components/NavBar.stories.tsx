import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "./NavBar";
import Link from "next/link";

export default {
    title: "Nav Bar",
    component: NavBar
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const desktop = Template.bind({});

desktop.args = {
  selectedLang: "en",
    logoUrl: "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/DesktopNavLogo.png?alt=media&token=4ee94450-ee7b-45c4-a527-3e678b925b51",
    navLinks: [
      {title:"How it works", url:"/how-it-works", key:"how-it-works" },
      {title:"Pricing", url:"/pricing", key: "pricing" },
      {title: "Blog", url:"/blog", key: "blog"}
    ],
    loginUrl:"school.merrillenglish.com"
}

desktop.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/bDVsRLgeZ3CCDs1PIo68hw/Merrill-English?node-id=528%3A1961"
  }
 
}