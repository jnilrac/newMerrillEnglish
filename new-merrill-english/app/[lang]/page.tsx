import Link from "next/link"
import { NavBar } from "../../components/NavBar"
import { PrimaryOutlineButton } from "../../components/PrimaryOutlineButton"
import { HomePageCard } from "../../components/HomePageCard"
import { GetStartedButton } from "../../components/GetStartedButton"
import englishLocale from "../../translations/english.json" assert {type:'json'};
import spanishLocale from "../../translations/spanish.json" assert {type:'json'};



export default function Page({params}:{params:{lang:string;}}) {
    const selectedLanguage = params.lang
    const siteLocaleTranslations = selectedLanguage === "en" ? englishLocale : spanishLocale;
    const {homePage} = siteLocaleTranslations;

    return (
      <>
      {/*Homepage Hero Section */}
          <div className="z-0 relative overflow-clip h-home-hero-phone md:h-full">
            <div className="absolute w-full h-full top-10  md:top-20 z-20">
              <div className="w-full h-full flex flex-col space-y-4 md:space-y-20 justify-center ">
                <div className="flex justify-center"><h1 className="text-white font-bold text-lg text-center md:text-3xl lg:text-4xl">{homePage.heroText}</h1></div>
                <div className="flex justify-center">
                  <Link href={homePage.heroButtonUrl}>
                  <PrimaryOutlineButton
                    strokeColor="border-blue-4"
                    strokeWidth="border-2"
                    text={homePage.heroButtonText}
                    textColor="blue-4"
                  />
                  </Link>
                  
                </div>
              </div>
            </div>
          <div className="bg-black h-full w-full opacity-50 absolute md:top-20"></div> 
          <img 
              src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktopHomeHero.png?alt=media&token=46327c98-f9a6-4682-bce0-ce204b642297" 
                className="hidden md:grid w-full"
              />   
          <img 
          src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2Fphone-hero-homepage.png?alt=media&token=6e1f54c0-61fc-4daa-ba55-883acce19463" 
            className="md:hidden"
          /> 
          </div>
            {/*Homepage Card Section */}
          <div className="w-full h-fit bg-white flex justify-center py-10">
            <div  className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-center lg:space-x-6 ">
                <HomePageCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FGuyAtLaptop.png?alt=media&token=59968391-0cfa-4a14-94c2-318b3c15d124"
                text={homePage["homecard-1"].text}
                title={homePage["homecard-1"].title}
                
               />
               <HomePageCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FCupAndLaptop.png?alt=media&token=c152e959-1676-4f3d-860d-b2c127644a37"
                text={homePage["homecard-2"].text}
                title={homePage["homecard-2"].title}
               />
              <HomePageCard
                imgUrl="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FTeacher.png?alt=media&token=91444d69-5c60-448b-a7a7-1142fb982a50"
                text={homePage["homecard-3"].text}
                title={homePage["homecard-3"].title}
              />
            </div>
          
          </div>
          <div className="relative bg-white">
            <div className="hidden lg:h-10 rounded-b-3xl bg-white absolute inset-0"></div>
          </div>

            {/*Homepage Features Sections */}

          <div className={`md:pt-10 w-full h-fit flex flex-col bg-blue-3 space-y-20 lg:space-y-40 lg:bg-[url("/backgroundvector.svg")] bg-no-repeat bg-cover`}>

            {/*Homepage Cellphone Section */}
            <div className="flex lg:flex-row flex-col lg:justify-center space-y-20">
              <div className="flex justify-center">
              <div className="text-white flex flex-col font-bold w-11/12 lg:w-8/12 space-y-10 pt-14 md:pt-40">
                <div className="md:self-center lg:self-start md:w-9/12 lg:w-full md:text-left text-center"><h2 className="text-3xl md:text-5xl">{homePage["feature-1"].title}</h2></div>
                <div className=" lg:self-start w-11/12 self-center md:w-9/12 lg:w-full text-center md:text-left"> 
                  <h2 className="text-2xl md:text-4xl ">{homePage["feature-1"].feature}</h2>
                </div> 
              </div>
              </div>
               {/*Homepage Laptop Section Phone */}
              <div className="w-full flex justify-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktop%20Cellphone%201.png?alt=media&token=627fcbcc-c031-4324-8486-a683f19e4c8a" />
              </div>
            </div>
            <div className="md:hidden flex justify-center">
              <div className="text-white flex flex-col font-bold w-11/12 lg:w-8/12 space-y-10 mb-20 md:pt-40">
                <div className="md:self-center lg:self-start md:w-9/12 lg:w-full md:text-left text-center"><h2 className="text-3xl md:text-5xl">{homePage["feature-2"].title}</h2></div>
                <div className=" lg:self-start w-11/12 self-center md:w-9/12 lg:w-full text-center md:text-left"> 
                  <h2 className="text-2xl md:text-4xl ">{homePage["feature-2"].feature}</h2>
                </div> 
              </div>
              </div>
              {/* Ditto desktop and tablet Section */}
           
            <div className="hidden md:flex md:justify-center lg:space-x-40">

              <div className="hidden lg:grid">
                <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktop%20Laptop%201.png?alt=media&token=f33ab0a4-cc8f-4b70-8850-27d7c7a5e497" />
              </div>

              <div className="text-white flex flex-col font-bold w-11/12 md:text-left text-center md:w-full lg:w-5/12 space-y-10 mt-10 lg:mt-20 mb-40">

                <div className=" md:flex md:text-left md:self-center lg:self-start md:w-9/12">
                  <h2 className="text-3xl md:text-5xl">{homePage["feature-2"].title}</h2>
                </div>

                <div className="lg:self-start w-11/12 self-center md:w-9/12 lg:w-full text-center md:text-left"> 
                  <span className=" text-2xl md:text-4xl ">{homePage["feature-2"].feature}</span>
                </div> 

              </div>
            </div>

          </div>
          {/*Homepage CTA Section */}
          <div className="bg-yellow-0 flex lg:flex-row flex-col h-fit justify-center lg:space-x-40 lg:py-40">
                <div className="flex flex-col space-y-4 text-center justify-center">
                  <div className="text-blue-4 flex flex-col space-y-14">
                    <h2 className="text-4xl lg:text-5xl font-bold mt-10 lg:mt-0">{homePage.callToAction.title}</h2>
                    <span className="text-2xl px-4 lg:px-0 lg:text-3xl font-semibold">{homePage.callToAction.cta}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0">
                      <Link href={homePage.callToAction.ctaUrl}>
                        <GetStartedButton
                          key="getStartedButton"
                          text={homePage.callToAction.ctaButton}
                        />
                      </Link>
                    
                    </div>
                   
                  </div>
               </div>
               <div className="mt-24 px-4 lg:mt-0 lg:px-0 self-center lg:self-start">
                <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktop%20GirlSittingOnFloor.png?alt=media&token=c7e01da5-f69a-48d6-a1bc-cb515c443fe8" />
               </div>
             
            </div>
      </>
      
      
    )
  }