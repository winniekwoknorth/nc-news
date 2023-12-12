import { useState, useEffect } from "react";
import { getAllNews } from "../utils.js";
import ArticleCard from './ArticleCard.jsx'

function ArticlesList() { 
    const [articles, setArticles] = useState([])
    const [avotes, setAVotes] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getAllNews().then((result) => {
            setArticles(result)
        })
            .then(() => {
            setIsLoading(false)
        })
    }, []);


    if(isLoading){
        return <>Loading...</>
          }

    return (<div>
        < h2 > Articles List</h2 >
        {articles.map((article) => {
            return <ArticleCard article={article} avotes={avotes} setAVotes={setAVotes} key={ article.article_id}  />
        }) }

        </div>)
}

export default ArticlesList