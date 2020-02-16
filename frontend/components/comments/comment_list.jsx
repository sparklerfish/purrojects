import React from 'react';
import CommentListItem from './comment_list_item';
import AddComment from './add_comment';

const CommentList = props => {
    if (!props.comments) return null;
    // console.log(props.comments)
    const comments = Object.values(props.comments);
    console.log(comments)
    return (
        <div className="comments-container">
            <div className="project-step-title">{comments.length} Discussions</div>
            <br />
            <ul className="comment-list">
                {comments.map((comment) => (
                    <CommentListItem comment={comment} key={comment.id}/>
                ))}
            </ul>
            <AddComment projectId={props.projectId}/>
        </div>
    )
};

export default CommentList;