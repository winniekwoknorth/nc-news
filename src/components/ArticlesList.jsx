import { useState, useEffect } from "react";
import { getAllNews } from "./utils.js";
import ArticleCard from './ArticleCard.jsx'

function ArticlesList() { 
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        getAllNews().then((result) => {
            setArticles(result)
            console.log(result)
          });
    }, []);


    return (<div>
        < h2 > Articles List</h2 >
        {articles.map((article) => {
            return <ArticleCard article={article} key={ article.article_id} />
        }) }

        </div>)
}

export default ArticlesList