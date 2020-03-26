import React, { useState } from "react";
import StepList from "../steps/step_list";
import { Link } from "react-router-dom";
import CommentListContainer from "../comments/comment_list_container";
import Footer from "../footer/footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    this.props.requestProject(this.props.match.params.projectId);
    this.props.requestSteps(this.props.match.params.projectId);
    this.props.requestComments(this.props.match.params.projectId);
    if (this.props.location.state) {
      const prevPath = this.props.location.state.prevPath;
      if (prevPath === "/") window.scrollTo(0, 0);
    }
  }

  handleDelete() {
      return new Promise((resolve, reject) => {
        resolve(this.props.deleteProject(this.props.project.id));
      }).then(this.props.history.push(`/projects`));
  }

  editLinks() {
    <div>
      <div className="done-button">
        <Link
          to={`/projects/${this.props.project.id}/update`}
          projectId={this.props.project.id}
        >
          Edit Purroject
        </Link>
      </div>

      <div className="delete-button" onClick={this.handleShow}>
        Delete Purroject
      </div>
    </div>;
  }

  render() {
    if (!this.props.project) return null;
    if (!this.props.steps) return null;

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


    return (
      <div>
        <div className="project-show">
          <center>
            <br />
            <div className="project-title">{this.props.project.title}</div>
            <p>by {this.props.project.author.username}</p>
            {this.props.project.imageUrl ? (
              <img
                className="project-show-image"
                src={this.props.project.imageUrl}
              />
            ) : null}
            <div className="project-body">{this.props.project.body}</div>
            <br />
            <hr />
            <br />
            <StepList
              projectId={this.props.project.id}
              steps={this.props.steps}
            />
            {this.props.project.author_id === this.props.userId ? (
              <div>
                <Link to={`/projects/${this.props.project.id}/update`}>
                  <div className="done-button">Edit Purroject</div>
                </Link>

                <div className="delete-button" onClick={this.handleShow}>
                  Delete Purroject
                </div>
                <br />
                <br />
              </div>
            ) : null}

            <CommentListContainer
              projectId={this.props.project.id}
              comments={this.props.comments}
              userId={this.props.userId}
            />
          </center>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          {/* <Modal.Header closeButton> */}
          {/* <Modal.Title>Modal heading</Modal.Title> */}
          {/* </Modal.Header> */}
          <Modal.Body closeButton>
            Are you sure you want to delete this project?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              style={deleteButton}
              onClick={this.handleDelete}
            >
              Delete Purroject
            </Button>
            &nbsp; 
            <Button
              variant="primary"
              style={cancelButton}
              onClick={this.handleClose}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default ProjectShow;
