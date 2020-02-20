import React from 'react';
import CommentFormContainer from "./comment_form_container";

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false
        }
        this.toggleForm = this.toggleForm.bind(this);
        // console.log("Project ID is " + this.props.projectId)
    }

    toggleForm = () => {
        this.setState({ formVisible: !this.state.formVisible });
    }

    componentDidUpdate() {
        const commentForm = document.getElementById("comment-form");
        if (this.state.formVisible) {
            commentForm.scrollIntoView();
        }
    }

    render () {
        return (
            <div className="new-submit" id="comment-form">
              <center>
                <div className="done-button" onClick={this.toggleForm}>
                    Post Comment
                </div>
                {this.state.formVisible ? (
                <CommentFormContainer
                    projectId={this.props.projectId}
                    toggleForm={this.toggleForm}
                />
                ) : null}
              </center>
          </div>
        );

    }
}

export default AddComment;
