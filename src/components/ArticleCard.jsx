
import { useEffect, useState} from "react"
import CommentsList from "./CommentsList"
import DetailArticle from "./DetailArticle"
import { patchAddVote,patchDeleteVote} from '../utils.js'

function ArticleCard({ article,setErr }) {
    const [avotes, setAVotes] = useState(article.votes)
    const [showComments, setShowComments] = useState(false)
    const [showDetailArt, setShowDetailArt] = useState(false)

    const article_id = article.article_id

    const clickComments = () => {
        setShowComments(!showComments)
        
    }
    const clickArticles = () => {
        setShowDetailArt(!showDetailArt)
        
    }
    const clickAddVote = ()=>{ 
        patchAddVote(article_id)
            .then((result) => setAVotes(result.votes))
            .catch((err) => {
                setErr(err)
        })
        
    }
    const clickDeleteVote = ()=>{ 
        patchDeleteVote(article_id)
            .then((result) => setAVotes(result.votes))
            .catch((err) => {
                setErr(err)
        })
    }

    return (
        <div className='ArticleCard'>
            <h3>{article.article_id}</h3>
            <h3>{article.title}</h3>
            <img src={article.article_img_url} alt={article.title} className='responsive' />
            <h3>votes:{avotes}</h3>
            <button className='vote' id={article.article_id} onClick={clickAddVote}>Add Vote</button>
            <p></p>
            <button className='vote' id={article.article_id} onClick={clickDeleteVote}>Delete Vote</button>
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