
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"


function ArticleCard({ comment, setComment}) {
    var d = new Date(comment.created_at);

  var datestring =
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ":" +
    d.getMinutes();

    return (
        <div className='CommentCard'>
            <p className='commentBody responsive'>{comment.body}</p>
            <p>Comment by {comment.author}</p>
            <p>at {datestring}</p>
            <p>vote: {comment.votes}</p>
            <button id={comment.comment_id} >Add Vote</button>
            <button id={comment.comment_id} >Delete Vote</button>
        </div>
    )
}

export default ArticleCard