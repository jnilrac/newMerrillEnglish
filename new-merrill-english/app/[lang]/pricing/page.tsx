import { PricingCard } from "../../../components/PricingCard"
import englishLocale from "../../../translations/english.json" assert {type:'json'};
import spanishLocale from "../../../translations/spanish.json" assert {type:'json'};


export default function Page({params}:{params:{lang:string;}}) {
    const selectedLanguage = params.lang
    const siteLocaleTranslations = selectedLanguage === "en" ? englishLocale : spanishLocale;
    const {pricingPage} = siteLocaleTranslations;
    const landingUrl = "https://mailchi.mp/8399d9d21810/untitled-page";

    return(
        <>
            {/*Pricing Page Header */}
            <div className="h-40 md:h-56  bg-blue-3 mt-20 flex flex-col md:flex-row justify-center">
                <h1 className="text-white text-center text-2xl md:text-5xl font-bold mt-4 md:mt-20">{pricingPage.header}</h1>
            </div>

            {/*Pricing Page Subheader 1 */}

            <div className="flex justify-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-4">{pricingPage["subheading-1"]}</h2>
            </div>
            {/*Pricing Group Classes */}
            <div className="grid grid-cols-1 justify-items-center gap-2 md:content-center md:flex md:flex-wrap lg:flex-nowrap md:gap-4 lg:gap-0  md:justify-center lg:space-x-4 lg:mb-20">
                <PricingCard
                    buyUrl={landingUrl}
                    classesPerMonth={pricingPage["gCard-1"].frequency}
                    price={pricingPage["gCard-1"].price}
                    pricePerClass={pricingPage["gCard-1"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
                <PricingCard
                    buyUrl={landingUrl}
                    classesPerMonth={pricingPage["gCard-2"].frequency}
                    price={pricingPage["gCard-2"].price}
                    pricePerClass={pricingPage["gCard-2"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
                <PricingCard
                    buyUrl={landingUrl}
                    classesPerMonth={pricingPage["gCard-3"].frequency}
                    price={pricingPage["gCard-3"].price}
                    pricePerClass={pricingPage["gCard-3"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
                <PricingCard
                    buyUrl={landingUrl}
                    classesPerMonth={pricingPage["gCard-4"].frequency}
                    price={pricingPage["gCard-4"].price}
                    pricePerClass={pricingPage["gCard-4"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
            </div>

             {/*Pricing Page Subheader 2 */}

             <div className="flex justify-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-4"> 1-on-1 Classes</h2>
            </div>
             {/*Pricing 1-on-1 Classes */}
             <div className="grid grid-cols-1 justify-items-center gap-2 md:content-center md:flex md:flex-wrap lg:flex-nowrap md:gap-4 lg:gap-0  md:justify-center lg:space-x-4 lg:mb-20">
                <PricingCard
                    buyUrl={landingUrl}
                    classesPerMonth={pricingPage["pCard-1"].frequency}
                    price={pricingPage["pCard-1"].price}
                    pricePerClass={pricingPage["pCard-1"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
                <PricingCard
                    buyUrl="/buy-now"
                    classesPerMonth={pricingPage["pCard-2"].frequency}
                    price={pricingPage["pCard-2"].price}
                    pricePerClass={pricingPage["pCard-2"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
                <PricingCard
                    buyUrl={landingUrl}
                    classesPerMonth={pricingPage["pCard-3"].frequency}
                    price={pricingPage["pCard-3"].price}
                    pricePerClass={pricingPage["pCard-3"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
                <PricingCard
                    buyUrl={landingUrl}
                    classesPerMonth={pricingPage["pCard-4"].frequency}
                    price={pricingPage["pCard-4"].price}
                    pricePerClass={pricingPage["pCard-4"].perClass}
                    buyButtonText={pricingPage.buyNowButton}
                    trialButtonText={pricingPage.freeTrialButton}
                    trialUrl={landingUrl}
                />
            </div>
            {/*Pricing How the free trial works */}
            <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-40 md:my-20 lg:my-40">
                <div className="mt-14 md:mt-0 mb-4 md:mb-10 lg:mb-0 px-10 md:px-0 self-center ">
                  <img src="https://firebasestorage.googleapis.com/v0/b/merrill-english-3df11.appspot.com/o/SiteAssets%2FDesktop%20tabletView%201.png?alt=media&token=4f254ace-3bf0-49d2-bbb0-482fa7b00865" />
                </div>
                
                <div className="flex flex-col space-y-10 lg:space-y-20">
                    <div className="flex justify-center"><h2 className="text-blue-4 text-2xl text-center lg:text-left md:text-4xl font-bold">{pricingPage["subheading-3"]}</h2></div>
                    <div className="px-4 md:px-0 pb-10 self-center">
                        <img src={pricingPage.imageUrl} />
                    </div>
                </div>

            </div>
        </>
    )
}