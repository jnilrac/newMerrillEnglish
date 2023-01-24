import React from 'react';
import Link from 'next/link';
import { SecondaryButton } from './SecondaryButton';


interface props {
    imgUrl: string;
    title: string;
    text: string;
    buttonText: string;
    key: string;
    postUrl: string;
}

export const BlogCard = ({title, text, imgUrl, postUrl, key, buttonText}: props) => {
    const reg1 = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;
    const newText = text.replace(reg1,"");
    const excerpt = newText.slice(0,60).concat('...')
    return(
        <>
           <div className="flex flex-col rounded w-card md:w-card-lg h-card shadow-md shadow-blue-0 box-border bg-white text-center">
                <div className="h-cardImg overflow-clip rounded-t">
                    <img className="object-fill" src={imgUrl} />
                </div>
                <div className="px-5 pt-3 mt-2">
                    <h1 className="text-2xl font-sans font-bold">{title}</h1>
                </div>
                <div className='px-5 pt-1.5 w-10/12 self-center'>
                    <p className='font-semibold'>
                    {excerpt}
                    </p>
                </div>
                <div className='flex justify-center pt-4'>
                    <Link href={postUrl} legacyBehavior>
                        <a>
                            <SecondaryButton
                            text={buttonText}
                            key={key}
                            />
                        </a>
                    </Link>
                </div>
           </div>
        </>
    )
}