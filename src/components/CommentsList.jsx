import { useState, useEffect } from "react";
import { getAllComments } from "../utils.js";
import CommentCard from './CommentCard.jsx'

function CommentsList() {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)


useEffect(() => {
    getAllComments(1).then((result) => {
        setComments(result)
        setIsLoading(false)
    })
}, [])

if (isLoading){ 
    return <>Loading...</>
}

    return(
        <div>
            <h2>Comments List</h2>
            {comments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
</div>
    )    
    
}
export default CommentsList