import { categories } from "../constants";

async function HomePage() {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','));
  return (
    <div>


    </div>
  )
}

export default HomePage