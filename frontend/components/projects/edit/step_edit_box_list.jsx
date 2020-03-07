import React from 'react'
import StepEditBox from './step_edit_box'

class StepEditBoxList extends React.Component {

    render() {
        if (!this.props.steps) return null;

        const steps = Object.values(this.props.steps)
        return (
            <div>
                <ul className="step-list">
                    {steps.map((step, idx) => (
                        <StepEditBox  
                            project={this.props.project}
                            step={step} 
                            key={step.id} 
                            idx={idx}
                            destroyStep={this.props.destroyStep}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default StepEditBoxList