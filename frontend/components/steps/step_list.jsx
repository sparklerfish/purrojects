import React from 'react'
import StepListItem from './step_list_item'
class StepList extends React.Component {
  render() {
    // debugger
    const steps = Object.values(this.props.steps)
    return (
      <div>
        <ul className="step-list">
          {steps.map((step) => (
            <StepListItem step={step} key={step.id}/>
          ))}
        </ul>
      </div>
    );
  }

}

export default StepList;
