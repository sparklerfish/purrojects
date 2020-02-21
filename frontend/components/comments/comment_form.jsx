import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleForm = this.props.toggleForm.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit() {
        if (this.props.createComment(this.state)) {
            this.props.clearErrors();
            this.toggleForm();
            this.props.requestComments(this.props.comment.project_id);
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        if (this.props.errors.length > 0) {
            return (
                <ul className="comment-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>{error}</li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="comment-box">
                <div>
                    {this.renderErrors()}
                    <textarea
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                    <div className="done-button" onClick={this.handleSubmit}>Submit</div>
                </div>
            </div>
        )
    }
}

export default CommentForm;