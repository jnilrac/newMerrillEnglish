'use client';
import React, { useState, ReactElement } from "react";
import OutsideClickHandler from 'react-outside-click-handler';
import Link from "next/link";
import { usePathname } from "next/navigation";
import 'material-icons/iconfont/material-icons.css';
import { PrimaryOutlineButton } from "./PrimaryOutlineButton";
import { LanguageButton } from "./LanguageButton";





type navLink = {
title: string;
url: string;
key: string;

};
type menu = string;
interface props {
    logoUrl: string;
    navLinks: Array<navLink>;
    loginUrl:string;
    selectedLang: string;
    loginButton: string;
    
   }

export const NavBar = ({logoUrl, navLinks, loginUrl, selectedLang, loginButton}: props) => {
    
    const [ tabletMenu, setTabletMenu ] = useState("hidden");
    const [ phoneMenu, setPhoneMenu ] = useState("hidden");
    
    
    const pathname =  usePathname();

    const menuHandler = (menu:string) : void => {
        if(menu === "tablet") {
            if(tabletMenu === "hidden"){
                setTabletMenu('');
               
                
            } else {
                //setTabletMenu('hidden');
                alert("hide me!")
            }
        } else {
            if(phoneMenu === "hidden"){
                setPhoneMenu('');
            } else {
                setPhoneMenu("hidden");
            
            }
        }
    }

    const getLinks = () : Array<ReactElement> => {
        const [ selected, setSelected ] = useState(navLinks);

       
        return navLinks.map((obj, index) : ReactElement=> {
                if(obj.url === pathname) {
                    return <Link key={obj.key} href={obj.url}><span className="text-blue-4">{obj.title}</span></Link>;  
                } else{
                    return <Link key={obj.key} href={obj.url}><span>{obj.title}</span></Link>;  
                }
                
            })
        
     
    }

    const getTabletLinks = () : Array<ReactElement> => {
       
        return navLinks.map((obj) : ReactElement=> {
                return <Link onClick={() => setTabletMenu('hidden')} key={obj.key} href={obj.url}>{obj.title}</Link>;  
         })
    
    }

    
    const getPhoneLinks = () : Array<ReactElement> => {
       
        return navLinks.map((obj) : ReactElement=> {
                return <Link onClick={()=> setPhoneMenu('hidden')} key={obj.key} href={obj.url}>{obj.title}</Link>;  
         })
    
    }

    const langOptions =  [
        {text:"English", key:"en"},
        {text:"Español", key:"es"},
    ]

    return(
        <>
        {/* Desktop Nav*/}

            <div className="hidden space-x-4  lg:flex w-full h-20 pt-4 justify-center bg-white/60 z-20">
                <div className="basis-3/12 flex pb-3">
                    <Link href={`/${selectedLang}`}><img className="object-contain" src={logoUrl} /></Link>
                    
                </div>
                <div className="space-x-5 font-semibold px-2 mt-3 flex basis-3/12">
                    {getLinks()}
                </div>

                <div className="flex basis-3/12 space-x-6 mt-1 justify-end">
                    <div className="mt-2">
                    <LanguageButton selectedLang={selectedLang} langOptions={langOptions} />
                    </div>
                    <a href="http://school.merrillenglish.com/login/index.php">
                                            
                        <PrimaryOutlineButton
                        strokeColor="border-blue-3"
                        strokeWidth="border"
                        text={loginButton}
                        textColor="blue-3"
                        />
                    </a>
                    
                </div>            
            </div>


            {/*Tablet Nav */}

            <div className="lg:hidden hidden md:flex w-full h-20 pt-5 pl-4 bg-white relative">
                <div className="basis-3/12" >
                <Link href={`/${selectedLang}`}><img className="object-contain" src={logoUrl} /></Link>
                </div>
                <div className="basis-9/12 h-7 flex justify-end pr-5 relative">
                    <div onClick={() => {menuHandler("tablet")}} className="border-2 border-black w-8 flex justify-center absolute mt-1">
                        <span className="material-icons-outlined">menu</span>
                    </div>
                    <div className={`${tabletMenu} border-2 border-black w-8 flex justify-center absolute mt-1`}>
                        <span className="material-icons-outlined">menu</span>
                    </div>
                </div>
                   <OutsideClickHandler onOutsideClick={()=> setTabletMenu('hidden')}>
                   <div className={`${tabletMenu} h-tablet-menu right-0 top-20 w-full bg-menu-background bg-white bg-no-repeat absolute bg-center flex flex-col`}>
                            <div className="flex justify-end w-11/12 mt-6">
                                <LanguageButton selectedLang={selectedLang} langOptions={langOptions} />
                            </div>
                            <div className="space-x-5 w-full h-5/6 justify-center flex">
                                <div className="text-blue-4  text-3xl flex font-bold">
                                    <div className="self-center flex space-x-5">
                                    {getTabletLinks()}
                                    
                                    </div>
                                </div>
                                <div className="self-center">
                                     <a href="http://school.merrillenglish.com/login/index.php">
                                        
                                            <PrimaryOutlineButton
                                            strokeColor="border-blue-3"
                                            strokeWidth="border"
                                            text={loginButton}
                                            textColor="blue-3"
                                            />
                                    </a> 
                                </div>
                            
                            </div>
                        
                        </div>
                   </OutsideClickHandler>
                        
                   
            </div>


            {/* Phone Nav*/}
    
            <div className="md:hidden lg:hidden w-full flex pt-5 pl-3 h-20 bg-white relative">
                <div className="basis-5/12 " >
                <Link href={`/${selectedLang}`}><img className="object-contain" src={logoUrl} /></Link>
                </div>
                <div className="basis-7/12  h-7 flex justify-end pr-5 relative">
                    <div onClick={() => {menuHandler('phone')}} className="border-2 border-black w-8 flex justify-center absolute mt-1">
                        <span className="material-icons-outlined">menu</span>
                    </div> 

                    <div className={`${phoneMenu} border-2 border-black w-8 flex justify-center absolute mt-1`}>
                            <span className="material-icons-outlined">menu</span>
                    </div> 

                 
                </div>
                
                <OutsideClickHandler onOutsideClick={() => setPhoneMenu('hidden')} >
                    <div className={`${phoneMenu} w-full h-phone-menu bg-menu-background bg-no-repeat bg-phone-menu absolute  bg-contain bg-white inset-0 top-20`}>
                        <div className="flex justify-end w-11/12 mt-6">
                            <LanguageButton selectedLang={selectedLang} langOptions={langOptions} />
                        </div>

                            <div className="h-4/6 flex justify-center space-y-8">
                                <div className="self-center">
                                    <div className="text-center space-y-8 text-blue-4 text-3xl font-bold flex flex-col">
                                        {getPhoneLinks()}
                                    </div>
                                
                                    <div className="justify-center flex mt-8"> 
                                        <a href="http://school.merrillenglish.com/login/index.php">
                                        
                                            <PrimaryOutlineButton
                                            strokeColor="border-blue-3"
                                            strokeWidth="border"
                                            text={loginButton}
                                            textColor="blue-3"
                                            />
                                        </a>
                                    </div>

                                </div>
                            
                            
                            </div>
                    </div>
                </OutsideClickHandler>

                
            </div>
        </>
        
    )
}