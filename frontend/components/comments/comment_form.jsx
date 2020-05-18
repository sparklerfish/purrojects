import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.toggleForm = this.props.toggleForm.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit() {
        this.props.clearErrors();
        let comment = Object.assign({}, this.state)
        const create = new Promise((resolve, reject) => {
          if (this.props.createComment(comment)) {
            resolve();
          }
        });

        create.then(()=> {
            setTimeout(() => {
                if (this.props.errors.length === 0) {
                    this.toggleForm();
                    // this.props.requestComments(this.props.comment.project_id);
                } else {
                    return;
                }
            }, 100);
        });
    }

    cancel() {
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
            <div className="comment-input">
              <img src={window.user} className="comment-avatar" />
              <textarea
                value={this.state.body}
                onChange={this.update("body")}
              />
            </div>
            <div className="comment-errors">{this.renderErrors()}</div>
            <div className="comment-actions">
              <p className="policy">
                <br />
                We have a <b>be nice</b> policy.
                <br />
                Please be positive and constructive.
              </p>
              <div className="buttons">
                <span className="cancel-button" onClick={this.cancel}>
                  Cancel
                </span>
                <span
                  className="comment-submit-button"
                  onClick={this.handleSubmit}
                >
                  Post
                </span>
              </div>
            </div>
          </div>
        );
    }
}

export default CommentForm;