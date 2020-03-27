import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class CommentListItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleDelete() {
        this.props.destroyComment(this.props.comment.id);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        if (!this.props.comment.author) return null;

        const deleteButton = {
            fontFamily: `"Helvetica Neue",Helvetica,Arial,sans-serif`,
            height: "34px",
            width: "200px",
            border: "1px solid transparent",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "400",
            marginBottom: "0",
            padding: "6px 12px",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: "#b30000",
            borderColor: "#800000",
            color: "#fff",
            textDecoration: "none",
            margin: "10px 0px 10px 0px"
        };

        const cancelButton = {
            fontFamily: `"Helvetica Neue",Helvetica,Arial,sans-serif`,
            height: "34px",
            width: "200px",
            border: "1px solid transparent",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "400",
            marginBottom: "0",
            padding: "6px 12px",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: "#FAAC18",
            borderColor: "#E5991F",
            color: "#fff",
            textDecoration: "none",
            margin: "10px 0px 10px 0px"
        };

        console.log(this.props)
        return (
            <>
                <li className="comment-container">
                    <img src={window.user} className="comment-avatar"/>
                    <span className="comment-author">{this.props.comment.author.username} </span>
                    <span className="comment-timestamp">{this.props.comment.time_ago} </span>
                    <div className="comment-body">{this.props.comment.body}</div>
                    {this.props.comment.author.username === this.props.currentUser ? (
                        <div
                            className="delete-comment"
                            onClick={this.handleShow}>
                            ×
                        </div>
                    ) : null }
                </li>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body style={{ textAlign: "center" }}>
                        Are you sure you want to delete this comment?
                    </Modal.Body>
                    <Modal.Footer
                        style={{ textAlign: "center", justifyContent: "center" }}
                    >
                    <Button
                        variant="secondary"
                        style={deleteButton}
                        onClick={this.handleDelete}
                    >
                        Delete Comment
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                        variant="primary"
                        style={cancelButton}
                        onClick={this.handleClose}
                    >
                        Cancel
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }

}

export default CommentListItem;