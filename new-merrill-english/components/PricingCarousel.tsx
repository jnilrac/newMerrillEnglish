'use client'
import React, { useState, useRef, ReactElement } from 'react';
import { useSwipeable } from 'react-swipeable';
import englishLocale from "../translations/english.json" assert {type:'json'};
import spanishLocale from "../translations/spanish.json" assert {type:'json'};


interface Props {
selectedLanguage: string;
}


export const PricingCarousel = ({selectedLanguage}: Props) : ReactElement => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const siteLocaleTranslations = selectedLanguage === "en" ? englishLocale : spanishLocale;
    const {howItWorksPage} = siteLocaleTranslations;
    const {slidesList} = howItWorksPage;
    const {slide1, slide2, slide3} = slidesList;

    const slides = [
        {
            circles:[0,1,1],
            step: <span>{slide1.step}</span>,
            legend:<p>{slide1.legend}</p>,
            img: <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FMock%20Sign%20Up.png?alt=media&token=8b515c06-e499-4325-837c-251ca44c7aa7" />
        },
        {
            circles:[1,0,1],
            step: <span>{slide2.step}</span>,
            legend:<p>{slide2.legend}</p>,
            img: <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FMock%20Placement.png?alt=media&token=0070c792-41da-44d2-9e6e-37853944a048" />
        },
        {
            circles:[1,1,0],
            step: <span>{slide3.step}</span>,
            legend:<p>{slide3.legend}</p>,
            img: <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FMock%20Class.png?alt=media&token=d9c860f4-4a91-4def-aef7-e5a5b6e6e474" />
        },
    ]
    
    const circlesList = [
        <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FcircleOne.svg?alt=media&token=59d4ef4b-bc6b-452c-8d7c-7291af70285b" />,
        <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FcircleTwo.svg?alt=media&token=c43b7867-7098-47d4-b658-68cacaa3abd7" />
    ]
        const rightButton = "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2Frightbutton.svg?alt=media&token=890d6e62-3fc3-49e2-88aa-78469914e1e4";
        const leftButton = "https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FleftButton.svg?alt=media&token=dc67c960-8fdc-4c92-b35e-516add59625b";
    
    const loopNext = () => {

        if(currentSlide === slides.length -1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const loopPrev = () => {

        if(currentSlide === 0) {
            setCurrentSlide(slides.length - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }
    const SlideNextButton = () => {  
        return (
           <button onClick={loopNext}><img  src={rightButton} /></button>
        );
      }

    const SlidePrevButton = () => {  
    
    return (
        <button onClick={loopPrev}><img  src={leftButton} /></button>
    );
    }

    const getSlides = () => {

     return  slides.map((slide) => {
           return( 
                <div className="mb-10">
                    <div className="flex flex-col space-y-6">
                    
                        <div className="flex flex-col space-y-3  justify-center ">
                            <div className="text-blue-4 text-xl font-bold  text-center">
                                <div className="">{slide.step}</div>
                                
                            </div>
                            <div className="text-base md:text-2xl text-center lg:text-3xl font-bold">
                               <div className="">{slide.legend}</div> 
                            </div>
                        </div>
                        <div className='mt-6'>
                            {slide.img}
                        </div>  
                        <div className='flex space-x-2 justify-center lg:hidden'>{slide.circles.map((circle)=>(circlesList[circle]))}</div>
                 </div>  
                </div>
               
            )
        })
    }

    const handlers = useSwipeable({     
        onSwipedLeft: (eventData) => loopPrev(),
        onSwipedRight: (eventData) => loopNext(),
        
      });

    return(
        <div className="flex justify-center ">
           
            <div className="hidden lg:flex lg:flex-col lg:justify-center mx-20"><SlidePrevButton/></div>
            <div {...handlers} className="">{getSlides()[currentSlide]}</div>
            <div className=" hidden lg:flex lg:flex-col lg:justify-center mx-20"><SlideNextButton/></div>
       
        </div>
      
    )
}