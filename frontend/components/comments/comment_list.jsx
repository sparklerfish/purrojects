import React from 'react';
import CommentListItem from './comment_list_item';
import AddComment from './add_comment';

const CommentList = props => {
  if (!props.comments) return null;
  const comments = Object.values(props.comments);
  
  return (
    <div className="comments-container">
      <div className="project-step-title">{comments.length} Comment{comments.length === 1 ? null : "s"}</div>
      <br />
      <ul className="comment-list">
        {comments.map(comment => (
          <CommentListItem 
            comment={comment}
            key={comment.id}
            userId={props.userId}
            currentUser={props.currentUser}
            destroyComment={props.destroyComment}
          />
        ))}
      </ul>
      <AddComment
        userId={props.userId}
        projectId={props.projectId}
      />
    </div>
  );
};

export default CommentList;