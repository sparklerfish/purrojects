import React from 'react';
import CommentListItem from './comment_list_item';
import AddComment from './add_comment';

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rerender: false
        }
    }

    render() {
        if (!this.props.comments) return null;
        const comments = Object.values(this.props.comments);
        return (
          <div className="comments-container">
            <div className="project-step-title">{comments.length} Comments</div>
            <br />
            <ul className="comment-list">
              {comments.map(comment => (
                <CommentListItem comment={comment} key={comment.id} />
              ))}
            </ul>
            <AddComment
              userId={this.props.userId}
              projectId={this.props.projectId}
            />
          </div>
        );
    }
};

export default CommentList;