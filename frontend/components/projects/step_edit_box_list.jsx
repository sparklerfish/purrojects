import React from 'react'
import StepEditBox from './step_edit_box'

class StepEditBoxList extends React.Component {

    render() {
        if (!this.props.steps) return null;

        // debugger
        const steps = Object.values(this.props.steps)
        return (
            <div>
                <ul className="step-list">
                    {steps.map((step, idx) => (
                        <StepEditBox  
                            step={step} 
                            key={step.id} 
                            idx={idx} 
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default StepEditBoxList