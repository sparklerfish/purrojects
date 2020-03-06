import React from 'react'

class StepListItem extends React.Component {
  render() {
    if (!this.props.step) return null;
    
    const stepNo = this.props.idx + 1
        return (
          <div className="project-step">
            <div className="project-step-title">Step {stepNo}: {this.props.step.title}</div>
            <img className="project-show-image" src={this.props.step.imageUrl} />
            <div className="project-step-body">{this.props.step.body}</div>
          </div>
        );

    }
}

export default StepListItem