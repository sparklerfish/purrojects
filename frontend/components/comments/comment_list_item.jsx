import React from 'react'

const CommentListItem = props => {
    return (
        <li>
            {props.comment.author.username} 
            {props.comment.body}
        </li>
    )
}

export default CommentListItem;