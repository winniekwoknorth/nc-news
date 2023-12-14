import { useState, useEffect } from "react";
import { getAllNews } from "../utils.js";
import ArticleCard from './ArticleCard.jsx'

function ArticlesList() { 
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(() => {
        getAllNews().then((result) => {
            setArticles(result)
        })
            .then(() => {
            setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                setErr(err)
        })
        
    }, []);


    if(isLoading){
        return <>Loading...</>
          }

    return (<div>
        < h2 > Articles List</h2 >
        {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} err={err} setErr={setErr} />
        }) }

        </div>)
}

export default ArticlesList