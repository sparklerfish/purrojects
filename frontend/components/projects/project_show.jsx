import React from "react";

import StepListContainer from "../steps/step_list_container";

class ProjectShow extends React.Component {
  componentDidMount() {
    this.props.requestSteps();
  }

  render() {
    const { project } = this.props;
    return (
      <div>
        <StepListContainer project_id={project.id} />
      </div>
    );
  }
}

export default ProjectShow;
