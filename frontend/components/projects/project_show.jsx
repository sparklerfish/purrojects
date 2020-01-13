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
        
        const { project, steps } = this.props;
        
        debugger
        return (
            <div>
                {project.title}
                <StepList project_id={project.id} steps={steps} />
            </div>
        );
    }
}

export default ProjectShow;
