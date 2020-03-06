import React from "react";
import StepList from "../steps/step_list";
import { Link } from "react-router-dom";
import CommentListContainer from "../comments/comment_list_container";
import Footer from "../footer/footer";

class ProjectShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
      this.props.requestProject(this.props.match.params.projectId);
      this.props.requestSteps(this.props.match.params.projectId);
      this.props.requestComments(this.props.match.params.projectId);
  }

  handleDelete() {
    if (window.confirm("Do you really want to delete this purroject?")) {
      this.props.deleteProject(this.props.project.id)
      this.props.history.push(`/projects`)
    }
  }

  editLinks() {
      <div>
        <div className="done-button">
          <Link to={`/projects/${this.props.project.id}/update`}>
            Edit Purroject
          </Link>
        </div>

        <div className="delete-button" onClick={this.handleDelete}>
          Delete Purroject
        </div>
      </div>
  }

  render() {
    if (!this.props.project) return null
    if (!this.props.steps) return null
    return (
      <div>
        <div className="project-show">
          <center>
            <br />
            <div className="project-title">{this.props.project.title}</div>
            <p>by {this.props.project.author.username}</p>
            <img className="project-show-image" src={this.props.project.imageUrl} />
            <div className="project-body">{this.props.project.body}</div>
            <br />
            <hr />
            <br />
            <StepList
              projectId={this.props.project.id}
              steps={this.props.steps}
            />
            {this.props.project.author_id === this.props.userId
              ? (<div>
                  <Link to={`/projects/${this.props.project.id}/update`}>
                    <div className="done-button">
                        Edit Purroject
                    </div>
                  </Link>

                  <div className="delete-button" onClick={this.handleDelete}>
                    Delete Purroject
                  </div>
                  <br/>
                  <br/>
              </div>)
              : null}
              {/* {this.editLinks} */}

            <CommentListContainer
              projectId={this.props.project.id}
              comments={this.props.comments}
              userId={this.props.userId}
            />
          </center>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ProjectShow;
