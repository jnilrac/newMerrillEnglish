import englishLocale from "../../../translations/english.json" assert {type:'json'};
import spanishLocale from "../../../translations/spanish.json" assert {type:'json'};


export default async function Head({params}:{params:{lang:string;}}) {
    const selectedLanguage = params.lang
    const siteLocaleTranslations = selectedLanguage === "en" ? englishLocale : spanishLocale;
    const {howItWorksPage} = siteLocaleTranslations;
  
    return (
      <>
        <title>{howItWorksPage.title}</title>
      </>
    )
  }