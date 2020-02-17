import React from 'react';
import CommentFormContainer from "./comment_form_container";

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false
        }
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm = e => {
        // e.stopPropagation();
        // e.preventDefault();
        console.log(this.props)
        this.setState({ formVisible: !this.state.formVisible });
    }

    render () {
        return (
          <div className="new-submit">
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
