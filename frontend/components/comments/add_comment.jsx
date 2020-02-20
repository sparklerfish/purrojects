import React from 'react';
import CommentFormContainer from "./comment_form_container";

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false,
            clickable: true
        }
        this.toggleForm = this.toggleForm.bind(this);
        // console.log("Project ID is " + this.props.projectId)
    }

    toggleForm = () => {
        this.setState({ 
            formVisible: !this.state.formVisible,
            clickable: !this.state.clickable
         });
    }

    componentDidUpdate() {
        const commentForm = document.getElementById("comment-form");
        if (this.state.formVisible) {
            commentForm.scrollIntoView();
        }
    }

    clickableButton() {
        return (
            <div className="comment-button" onClick={this.toggleForm}>
                Post Comment
            </div>
        )
    }

    unclickableButton() {
        return(
            <div className="disabled-comment-button">
                Post Comment
            </div>
        )
    }

    render () {
        return (
            <div className="new-submit" id="comment-form">
              <center>
                {this.state.clickable ? this.clickableButton() : this.unclickableButton() }
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
