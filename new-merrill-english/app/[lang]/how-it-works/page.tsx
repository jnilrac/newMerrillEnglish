import Link from "next/link";
import { NavBar } from "../../../components/NavBar";
import { HomePageCard } from "../../../components/HomePageCard";
import { GetStartedButton } from "../../../components/GetStartedButton";
import { PricingCarousel } from "../../../components/PricingCarousel";
import englishLocale from "../../../translations/english.json" assert {type:'json'};
import spanishLocale from "../../../translations/spanish.json" assert {type:'json'};

export default function Page({params}:{params:{lang:string;}}) {
  const selectedLanguage = params.lang
  const siteLocaleTranslations = selectedLanguage === "en" ? englishLocale : spanishLocale;
  const {howItWorksPage} = siteLocaleTranslations;

   
    return (
      <>
      {/*How it works Hero Section */}
          <div className="z-0 relative overflow-clip lg:h-desktop-section  mt-20">
          <img 
              src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2Fjoshua-mayo-KboMbhlRgGY-unsplash%201.png?alt=media&token=09f8959e-54e9-42cd-80fe-a0b66432a003" 
                className="w-full object-contain"
              />   
          </div>
            {/*How it works Card Section */}
          <div className="mt-4 px-20"><h2 className=" text-2xl text-center lg:text-left md:text-4xl font-bold">{howItWorksPage["subheading-1"]}</h2></div> 
          <div className="w-full h-fit bg-white flex justify-center py-10">
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-center lg:space-x-6 ">
                <HomePageCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktop%20Ladies%20Talking.png?alt=media&token=aa21f6bd-1221-4e66-a13d-569b89864705"
                text={howItWorksPage["homecard-1"].text}
                title={howItWorksPage["homecard-1"].title}
                
               />
               <HomePageCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktop%20Black%20Man%20at%20Laptop.png?alt=media&token=4fc4b23e-9efc-4b5b-b1e3-e73ed14bb753"
                text={howItWorksPage["homecard-2"].text}
                title={howItWorksPage["homecard-2"].title}
               />
              <HomePageCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktop%20American%20Flag.png?alt=media&token=1d7cd4b4-bf4b-4c73-b3be-a325ad3d07ad"
                text={howItWorksPage["homecard-3"].text}
                title={howItWorksPage["homecard-3"].title}
              />
            </div>

          </div>
          {/*How it works Pricing Carousel */}
          <div className="my-4 text-center lg:text-left md:px-20"><h2 className="text-2xl md:text-4xl font-bold">{howItWorksPage["subheading-2"]}</h2></div> 
          <div className="px-2 md:px-0">
           <PricingCarousel selectedLanguage={selectedLanguage} />
          </div>

          <div className="flex flex-col h-fit space-y-10">
          <div className="mt-4 px-2 md:px-20 flex justify-center">
            <h2 className="text-center md:text-left text-2xl md:text-4xl font-bold">{howItWorksPage.callToAction.cta}</h2>
          </div> 
          <div className="flex justify-center">
              <div className="flex justify-center relative mb-40  ">
                <div className="absolute top-4">
                  <Link href={howItWorksPage.callToAction.ctaUrl}>
                   <GetStartedButton  text={howItWorksPage.callToAction.ctaButton}/>
                  </Link>
                
                </div>
                
              </div>
          </div>
         
          </div>
          
      </>
      
      
    )
  }