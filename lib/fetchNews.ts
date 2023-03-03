import {gql} from "graphql-request"

const fetchNews = async(
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "gb"
                sort:"published_desc"
                keywords: $keywords
                ){
                data{
                    author
                    category
                    image
                    description
                    country
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination{
                    count
                    limit
                    offset
                    total
                }
            }
        }`;

        const res = await fetch('https://tvardita.stepzen.net/api/nihilist-tiger/__graphql',{
            method:'POST',
            cache: isDynamic ? "no-cache" : "default",
            next: isDynamic ? {revalidate: 0} : {revalidate: 20},
            headers: {
                "Content-Type": "application/json",
                Authorization:`Apikey ${process.env.STEPZEN_API_KEY}`,
            },
            body: JSON.stringify({
                query,
                variables:{
                    access_key: process.env.MEDIASTACK_API_KEY,
                    categories: category,
                    keywords: keywords,
                }
            })

        });

        console.log("Loading NEW DATA FROM API for category >>> ", category , keywords)

        const newsResponse = await res.json();

}

export default fetchNews;

