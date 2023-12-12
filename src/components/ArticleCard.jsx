
import { Link } from "react-router-dom"
import {useEffect } from "react"
function ArticleCard({ article, avotes, setAVotes }) {
    const actualVote = article.votes
    
    useEffect(() => {
        setAVotes(actualVote)
    }, [actualVote])


    return (
        <div className ='ArticleCard'>
            <h3>{article.article_id}</h3>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt={article.title} className='responsive' />
            <h3>votes:{avotes}</h3>
            <button id={article.article_id} onClick={console.log('hi')}>Add Vote</button>
            <p></p>
            <button id={article.article_id} >Delete Vote</button>
            <p></p>
            <Link to="detailarticle">Detail Article</Link>
            <p></p>
            <Link to="commentslist">See Comments</Link>
            
        </div>
    )
}

export default ArticleCard