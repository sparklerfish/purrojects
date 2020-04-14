import React from 'react'

const StepListItem = props => {
  if (!props.step) return null;
  
  const stepNo = props.idx + 1
  
  return (
    <div className="project-step">
      <div className="project-step-title">Step {stepNo}: {props.step.title}</div>
      {props.step.imageUrl ? <img className="project-show-image" src={props.step.imageUrl} /> : null}
      <div className="project-step-body">{props.step.body}</div>
    </div>
  );
}

export default StepListItem