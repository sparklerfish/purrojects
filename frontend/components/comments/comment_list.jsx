import React from 'react';
import CommentListItem from './comment_list_item';
import AddComment from './add_comment';

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rerender: false
        }
        this.updateList = this.updateList.bind(this)
    }

    updateList() {
        this.forceUpdate();
        console.log("list updated")
        // this.props.requestComments(this.props.projectId);
        this.setState({
            rerender: !this.state.rerender
        })
        console.log(this.state);
    }

    render() {
        if (!this.props.comments) return null;
        // console.log(props.comments)
        const comments = Object.values(this.props.comments);
        // console.log(comments)
        return (
            <div className="comments-container">
                <div className="project-step-title">{comments.length} Discussions</div>
                <br />
                <ul className="comment-list">
                    {comments.map((comment) => (
                        <CommentListItem comment={comment} key={comment.id}/>
                    ))}
                </ul>
                <AddComment projectId={this.props.projectId} updateList={this.updateList}/>
            </div>
        )
    }
};

export default CommentList;