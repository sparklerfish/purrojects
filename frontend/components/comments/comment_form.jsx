import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleForm = this.props.toggleForm.bind(this);
        // this.updateList = this.props.updateList.bind(this);
    }

    handleSubmit() {
        this.props.createComment(this.state);
        this.toggleForm();
        // this.props.updateList();
        // console.log(this.props)
        this.props.requestComments(this.props.comment.project_id)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <center>
                <div className="comment-box">

                    <div>
                        <textarea
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                        <div className="done-button" onClick={this.handleSubmit}>Submit</div>
                    </div>
                </div>

            </center>
        )
    }
}

export default CommentForm;