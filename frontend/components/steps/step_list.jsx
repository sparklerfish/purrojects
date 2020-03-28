import React from 'react'
import StepListItem from './step_list_item'

const StepList = props => {
    if (!props.steps) return null;
    
    const steps = Object.values(props.steps);

    return (
      <ul className="step-list">
        {steps.map((step, idx) => (
          <StepListItem step={step} key={`step-${step.id}`} idx={idx}/>
        ))}
      </ul>
    );
}

export default StepList;