import React from 'react';

interface props {
    text: string;
}

export const GetStartedButton = ({text} : props) => {
    
    
    return(
             <button className='text-white font-semibold text-2xl rounded bg-green-4 w-60 hover:w-72 h-16 hover:h-20'>{text}</button>
    ) 
       
 
};