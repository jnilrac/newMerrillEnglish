import React, {ReactElement} from "react";
import Link from "next/link";
import 'material-icons/iconfont/material-icons.css';
import { SecondaryButton } from "./SecondaryButton";
import englishLocale from "../translations/english.json" assert {type:'json'};
import spanishLocale from "../translations/spanish.json" assert {type:'json'};



type navlink = {
    title: string;
    url: string;
};

type socialIcon = {
    icon:ReactElement;
    url: string;
};

interface Props {
 logoUrl: string;
 navLinks: Array<navlink>;
 socialIcons: Array<socialIcon>;
 careerUrl: string;
 socialCta: string;
}




export const Footer = ({logoUrl,navLinks,socialIcons, careerUrl, socialCta}: Props) => {

   
    const getLinks = () : Array<ReactElement> => {
        return navLinks.map((obj) : ReactElement=> {
                return <Link href={obj.url}>{obj.title}</Link>;  
         })
    }

    const getSocial = () : Array<ReactElement> => {
        return socialIcons.map((obj) : ReactElement=> {
                return <Link href={obj.url} legacyBehavior><a>{obj.icon}</a></Link>;  
         })
    }
   
    const copyrightDate =new Date().getFullYear()
    return(
        <>
            {/*Desktop Footer */}
            <div className="w-full lg:h-desktop-footer h-footer bg-blue-4 flex flex-col p-14">
                <div className="flex justify-center lg:justify-start"><img className="object-fill" src={logoUrl} /></div>
                <div className="flex flex-col-reverse justify-center lg:flex-row lg:justify-start">
                    <div className="flex text-center lg:w-5/12 justify-center">
                        <div className="text-center lg:pl-14 mt-4 flex flex-col text-white lg:text-left font-semibold space-y-4">
                            {getLinks()}
                        </div>
                    </div>
                   
                    <div className="flex my-4 flex-col">
                        <div className="font-bold text-center text-white md:text-2xl mb-8">{socialCta}</div>
                        <div className="flex justify-center space-x-4 ">{getSocial()}</div>
                        
                    </div>
                </div>
             
                <div className="flex justify-center mt-10 text-white">
                    <span className="text-sm md:text-base text-center">© Copyright {copyrightDate}  Merrill English</span>
                </div>
            </div>

            
        </>
    )
}