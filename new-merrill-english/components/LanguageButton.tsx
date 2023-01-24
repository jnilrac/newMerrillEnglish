'use client'
import React, {useState, useEffect, ReactElement} from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import 'material-icons/iconfont/material-icons.css';
import OutsideClickHandler from 'react-outside-click-handler';

type langOption = {
    text: string;
    key: string;
};



interface props {
 langOptions: Array<langOption>;
 selectedLang:string;
}




export const LanguageButton = ({langOptions, selectedLang}: props) => {
    const [selected, setSelected] =  useState<number>(0);
    const [isHidden, setIsHidden] = useState("hidden");
    const pathname = usePathname();
    const strippedPath = pathname?.slice(3)
    const setSelectedFromParams = () => {
        console.log(selectedLang)
    }

    useEffect(()=>{
        selectedLang === "en" ? setSelected(0) : setSelected(1);
    },[])
    const optionLister = () : Array<ReactElement> => {
       return langOptions.map((option, index) => <li onClick={() => {
        setSelected(index);
        setIsHidden("hidden");
    }} key={option.key}><Link href={`/${option.key}/${strippedPath}`}>{option.text}</Link></li>);
    }

    const DropdownMenu = () : ReactElement => (
        <OutsideClickHandler onOutsideClick={() => setIsHidden("hidden")}>
            <div  className={`absolute flex flex-col justify-center w-28 pl-7 mt-2 space-x-2 bg-slate-300 ${isHidden}`}>
                <ul>
                    {optionLister()}
                </ul>  
             </div>
        </OutsideClickHandler>
     
        
    )


   
    return(
        <div className="relative">
            <button onClick={() => setIsHidden("")} className="flex space-x-1 ">
                <span className="material-icons-outlined">language</span>
                <span>{langOptions[selected].text}</span>
                <span className="material-icons-outlined">arrow_drop_down</span>  
            </button>
            
             <DropdownMenu />
          
            
        </div>
      
    );
}