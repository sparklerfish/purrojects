import React from 'react'

class StepListItem extends React.Component {
    render() {
        return (
          <div className="project-step">
            <div className="project-step-title">{this.props.step.title}</div>
            <div className="project-step-body">{this.props.step.body}</div>
          </div>
        );

    }
}

export default StepListItem