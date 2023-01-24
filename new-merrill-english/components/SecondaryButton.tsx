import React from 'react';
import Link from 'next/link';

interface Props {
    text: string;
     
}


export const SecondaryButton = ({text}: Props) => {
    
    
    return(    
                <button className='text-white font-semibold text-base rounded bg-blue-1 pb-2.5 pt-1.5 px-5'>{text}</button>
              
    ) 
       
 
}