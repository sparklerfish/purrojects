import React from 'react'

class StepEditBox extends React.Component {
    render() {
        if (!this.props.step) return null;

        const stepNo = this.props.idx + 1
        return (
            <div className="edit-box">
                <div className="step-box-title">Step {stepNo}: Click to Edit</div>
            </div>
        );

    }
}

export default StepEditBox