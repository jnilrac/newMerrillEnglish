import React from 'react';


interface Props {
    imgUrl: string;
    title: string;
    text: string;
 
}

export const HomePageCard = ({title, text, imgUrl}: Props) => {
    return(
        <>
           <div className="flex flex-col rounded  w-card  md:w-10/12 md:self-center lg:w-card-lg h-card shadow-md shadow-blue-0 box-border bg-white">
                <div className="h-cardImg lg:h-cardImg md:h-72 overflow-clip rounded">
                    <img className="w-full" src={imgUrl} />
                </div>
                <div className="px-5 pt-3">
                    <h1 className="text-xl font-sans font-bold text-center md:text-left">{title}</h1>
                </div>
                <div className='text-center md:text-left px-5 pt-1.5'>
                    <p className='font-semibold'>
                    {text}
                    </p>
                </div>
           </div>
        </>
    )
}