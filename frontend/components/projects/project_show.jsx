import React from "react";

import StepListContainer from "../steps/step_list_container";

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.requestProject();
    }

    render() {
        debugger
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
