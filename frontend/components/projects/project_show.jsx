import React from "react";
import StepList from "../steps/step_list";

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.requestProject(this.props.match.params.projectId);
        // debugger
        this.props.requestSteps(this.props.match.params.projectId);
    }

    render() {
        // console.log(this.props)
        if (!this.props.project) return null
        if (!this.props.steps) return null
        
        // const { project, steps } = this.props;
        // console.log(this.props.steps)
        // debugger
        return (
          <div className="project-show">
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
          </div>
        );
    }
}

export default ProjectShow;
