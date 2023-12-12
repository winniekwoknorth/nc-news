import { useState, useEffect } from "react";
import { getAllNews } from "./utils.js";
import ArticleCard from './ArticleCard.jsx'

function ArticlesList() { 
    const [articles, setArticles] = useState([])
    const [avotes, setAVotes]=useState(0)
    
    useEffect(() => {
        getAllNews().then((result) => {
            setArticles(result)
          });
    }, []);


    return (<div>
        < h2 > Articles List</h2 >
        {articles.map((article) => {
            return <ArticleCard article={article} avotes={avotes} setAVotes={setAVotes} key={ article.article_id}  />
        }) }

        </div>)
}

export default ArticlesList