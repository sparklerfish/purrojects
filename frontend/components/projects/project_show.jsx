import React from "react";
import StepList from "../steps/step_list";
import { Link } from "react-router-dom";

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.props.requestProject(this.props.match.params.projectId);
        this.props.requestSteps(this.props.match.params.projectId);
    }

    handleDelete() {
      this.props.deleteProject(this.props.project.id)
      this.props.history.push(`/projects`)
    }

    render() {
        if (!this.props.project) return null
        if (!this.props.steps) return null

        return (
          <div className="project-show">
            <center>
              <br/>
              <div className="project-title">{this.props.project.title}</div>
              <div className="project-body">{this.props.project.body}</div>
              <br/>
              <hr/>
              <br/>
              <StepList
                project_id={this.props.project.id}
                steps={this.props.steps}
              />
              <div className="done-button">
                <Link to={`/projects/${this.props.project.id}/update`}>
                  Edit Purroject
                </Link>
              </div>

              <div className="delete-button" onClick={this.handleDelete}>
                  Delete Purroject
              </div>
            </center>
          </div>
        );
    }
}

export default ProjectShow;
