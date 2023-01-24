import React from "react";

interface props {
    text: string;
    strokeWidth: string;
    strokeColor: string;
    textColor: string;
}

export const PrimaryOutlineButton = ({text, strokeWidth, strokeColor, textColor}: props) => {
    return(

        <button className={`flex flex-wrap h-fit rounded bg-white ${strokeWidth} ${strokeColor} text-${textColor} font-semibold text-center py-1.5 px-4`}>{text}</button>
      
    )
}