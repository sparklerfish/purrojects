import React from 'react'

const CommentListItem = props => {
    return (
        <li className="comment-container">
            <span className="comment-author">{props.comment.author.username} </span>
            <span className="comment-timestamp">{props.comment.time_ago} </span>
            <div className="comment-body">{props.comment.body}</div>
        </li>
    )
}

export default CommentListItem;