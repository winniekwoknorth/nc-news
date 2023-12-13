
import { Link} from "react-router-dom"
import { useState} from "react"
import CommentsList from "./CommentsList"
import DetailArticle from "./DetailArticle"

function ArticleCard({ article, avotes, setAVotes}) {
    const actualVote = article.votes
    const article_id = article.article_id

    const [showComments, setShowComments] = useState(false)
    const [showDetailArt, setShowDetailArt]=useState(false)
    
    const clickComments = () => {
        setShowComments(!showComments)
        
    }
    const clickArticles = () => {
        setShowDetailArt(!showDetailArt)
        
    }

    return (
        <div className='ArticleCard'>
            <h3>{article.article_id}</h3>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt={article.title} className='responsive' />
            <h3>votes:{avotes}</h3>
            <button id={article.article_id} onClick={()=>console.log('hi')}>Add Vote</button>
            <p></p>
            <button id={article.article_id} >Delete Vote</button>
            <p></p>
            <button id={article.article_id} onClick={clickArticles}>
                {showDetailArt ? "Hide Detail Article" : "Show Detail Article"}</button>
            <>{showDetailArt === true ? <DetailArticle article_id={ article_id} /> : <></> }</>
            <p></p>
            <button id={article.article_id} onClick={clickComments}>
                {showComments ? "Hide Comments" : "Show Comments"}</button>
            <>{showComments === true ? <CommentsList article_id={ article_id} /> : <></> }</>
            
        </div>
    )
}

export default ArticleCard