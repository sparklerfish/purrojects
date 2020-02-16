import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this)
        this.toggleForm = this.props.toggleForm;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.toggleForm();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="body">
                        <textarea
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default CommentForm;