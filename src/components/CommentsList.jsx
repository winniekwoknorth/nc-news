import { useState, useEffect } from "react";
import { getAllComments } from "../utils.js";
import CommentCard from './CommentCard.jsx'


function CommentsList({ article_id}) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)
    
useEffect(() => {
    getAllComments(article_id).then((result) => {
        setComments(result)
        setIsLoading(false)
    })
        .catch((err) => {
            setIsLoading(false)
            setErr(err)
    })
}, [])

if (isLoading){ 
    return <>Loading...</>
}
    if (err) { 
        return <>{ err.message}</>
    }
    return(
        <div>
            <h2>Comments List</h2>
            <p>{ comments.length} comments</p>
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </div>
    )    
    
}
export default CommentsList