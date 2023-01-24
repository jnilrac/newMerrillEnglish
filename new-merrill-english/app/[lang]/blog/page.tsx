import { ReactElement } from "react";
import { BlogCard } from "../../../components/BlogCard"
import englishLocale from "../../../translations/english.json" assert {type:'json'};
import spanishLocale from "../../../translations/spanish.json" assert {type:'json'};

type posts = Array<post>;

interface post {
    title: string;
    content: Array<any>;
    slug: string;
    heroImage: string;
    postId: string;
    parsedTableData: Array<tableDataContent>;
}
interface tableDataContent {
    postSectionContent:  string;
    postSectionType: string;
}

interface postToParse {
    postId: string;
    data: data;
}

interface data {
    author: string;
    title: string;
    slug: string;
    tableDataContent: string;
    date_created:object;
    category: string;
    heroImage: string;
}




export default async function Page({params}:{params:{lang:string; slug:string; id:string;}}) {
    const selectedLanguage = params.lang
    const siteLocaleTranslations = selectedLanguage === "en" ? englishLocale : spanishLocale;
    const {blogs} = siteLocaleTranslations;
    
    const getPosts= async () => {
    
        const parsedPosts: any = [];
         try {
          
           const response = await fetch('https://us-central1-pullfluence-ac815.cloudfunctions.net/posts', {
             method: 'POST',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({siteId: "XGeIY7ZSUn1h9R3PyOtv"}),
             next: { revalidate: 10 }
             });
         
     
             const rawResponse = await response.json();
             const data = rawResponse
             
         data.map((post: postToParse) =>{
             const {data, postId} = post;
             
             const {
                 author,
                 title,
                 slug,
                 tableDataContent,
                 date_created,
                 category,
                 heroImage,
             } = data;
    
             const parsedTableData = JSON.parse(tableDataContent);
             function isWritten(section: tableDataContent) {
                 return section.postSectionType === "Written Content";
               }
             const result = parsedTableData.find(isWritten);
       
             const {postSectionContent} = result;
           
             parsedPosts.push(
                <BlogCard
                key={postId}
                buttonText={blogs.readButton}
                imgUrl={heroImage}
                postUrl={`${selectedLanguage}/blog/${slug}/${postId}`}
                text={postSectionContent}
                title={title}
                />
             )
         })
         
         } catch (error) {
           console.error(error);
         }
        
         return parsedPosts ;
    }
    const blogRollData =  await getPosts();
    return(
        <>
            {/*Blog Roll Page Header */}
            <div className="h-56 bg-blue-3 mt-20 flex justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mt-20">Merrill English Blog</h1>
            </div>

            {/*Blog Roll*/}
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                {blogRollData}
                </div>
            </div>
           

        </>
    )
}