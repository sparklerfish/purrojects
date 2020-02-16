import CommentFormContainer from "./comment_form_container";
import React from 'react'

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisible: false
        }
        // this.toggleForm = this.toggleForm.bind(this);
    }

    // toggleForm = e => {
    //     e.preventDefault();
    //     // this.state.formVisible ? this.setState({ formVisible: false }) : this.setState({ formVisible: true })
    // }

    render () {
        return (
            <div className="new-submit">
                <center>
                    {/* <div className="done-button" onClick={this.toggleForm}> */}
                    <div className="done-button">
                        Post Comment
                        {/* {this.state.formVisible ? <CommentFormContainer /> : null} */}
                        {/* <CommentFormContainer projectId={this.props.projectId}/> */}
                    </div>
                </center>
            </div>
    
        )

    }
}

export default AddComment;
