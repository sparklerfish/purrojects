import React from 'react'

const CommentListItem = props => {
    return (
        <li className="comment-list-item">
            <span className="comment-author">{props.comment.author.username} </span>
            <span className="comment-body">{props.comment.body}</span>
        </li>
    )
}

export default CommentListItem;