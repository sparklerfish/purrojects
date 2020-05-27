import React, { useState, useEffect } from "react";
import StepList from "../steps/step_list";
import { Link } from "react-router-dom";
import CommentListContainer from "../comments/comment_list_container";
import Footer from "../footer/footer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProjectShow = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    props.requestProject(props.match.params.projectId);
    props.requestSteps(props.match.params.projectId);
    props.requestComments(props.match.params.projectId);
    if (props.location.state) {
      const prevPath = props.location.state.prevPath;
      if (prevPath === "/") window.scrollTo(0, 0);
    }
  }, [])

  const handleDelete = () => {
    props.deleteProject(props.project.id)
      .then(() => props.history.push(`/projects`));
  }

    if (!props.project) return null;
    if (!props.steps) return null;

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
      // margin: "10px 0px 10px 0px"
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
          <div className="project-title">{props.project.title}</div>
          <p>by {props.project.author.username}</p>
          {props.project.imageUrl ? (
            <img
              className="project-show-image"
              src={props.project.imageUrl}
            />
          ) : null}
          <div className="project-body">{props.project.body}</div>
          <br />
          <hr />
          <br />
          <StepList
            projectId={props.project.id}
            steps={props.steps}
          />
          {props.project.author_id === props.userId ? (
            <>
              <Link to={`/projects/${props.project.id}/update`} style={{ width: "200px"}}>
                <div className="done-button" style={{ textDecoration: "none", width: "200px"}}>Edit Purroject</div>
              </Link>

              <div className="delete-button" onClick={handleShow}>
                Delete Purroject
              </div>
              <br />
              <br />
            </>
          ) : null}

          <CommentListContainer
            projectId={props.project.id}
            comments={props.comments}
            userId={props.userId}
          />
        </center>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body style={{ textAlign: "center" }}>
          Are you sure you want to delete this project?
        </Modal.Body>
        <Modal.Footer
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <Button
            variant="secondary"
            style={deleteButton}
            onClick={handleDelete}
          >
            Delete Purroject
          </Button>
          &nbsp; &nbsp;
          <Button
            variant="primary"
            style={cancelButton}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
}

export default ProjectShow;
