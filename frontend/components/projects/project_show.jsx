import React from "react";

import StepListContainer from "../steps/step_list_container";

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // debugger
        // this.props.requestProject(this.props.project.id);
    }

    render() {
        // debugger
        const { project } = this.props;

        return (
            <div>
                test
                {/* <StepListContainer project_id={project.id} /> */}
            </div>
        );
    }
}

export default ProjectShow;
