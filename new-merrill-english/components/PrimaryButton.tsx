import React from 'react';


interface Props {
    text: string;
    key: string;   
}


export const PrimaryButton = ({text, key}: Props) => {
    
    
    return(    
                <button key={key} className='text-white font-semibold text-base rounded bg-blue-4 pb-2.5 pt-1.5 px-5'>{text}</button>
              
    ) 
       
 
}