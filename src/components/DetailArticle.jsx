import { getDetailNews } from "../utils.js";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';






function DetailArticle() {
    const [detailArticle, setDetailArticle] = useState('') 
    const { article_id } = useParams()
    
    useEffect(() => {
        if (article_id) {
            getDetailNews(article_id).then((result) => {
                setDetailArticle(result)
                
            
            })
        }
    }, []);

    return (<div className='DetailArticle'> 
        {detailArticle.id}
        <h1>topic:{detailArticle.title}</h1>
        <img src={detailArticle.article_img_url} alt={detailArticle.title} className='responsive' />
        <h3>topic:{detailArticle.topic}</h3>
        <h3>author:{detailArticle.author}</h3>
        <h3>body:{detailArticle.body}</h3>
        <h3>created_at:{detailArticle.created_at}</h3>
        <h3>votes:{detailArticle.votes}</h3>
    </div>)
}

export default DetailArticle