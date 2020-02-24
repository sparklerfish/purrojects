import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.toggleForm = this.props.toggleForm.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit() {
        this.props.clearErrors();
        const create = new Promise((resolve, reject) => {
            resolve(this.props.createComment(this.state));
        });
        create.then(()=> {
            setTimeout(() => {
                if (this.props.errors.length === 0) {
                    this.toggleForm();
                    this.props.requestComments(this.props.comment.project_id);
                } else {
                    return;
                }
            }, 100)
        })
    }

    handleCancel() {
        this.props.clearErrors();
        this.toggleForm();
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
              <div>
                <textarea
                  value={this.state.body}
                  onChange={this.update("body")}
                />
                <div className="comment-input">{this.renderErrors()}</div>
                <p className="policy">
                  We have a <b>be nice</b> policy.<br/>
                  Please be positive and
                  constructive.
                </p>
                <span className="cancel-button" onClick={this.handleCancel}>
                  Cancel
                </span>
                <span className="comment-submit-button" onClick={this.handleSubmit}>
                  Submit
                </span>
              </div>
            </div>
          </div>
        );
    }
}

export default CommentForm;