import React from 'react'
import { Link } from 'react-router-dom';

class StepEditBox extends React.Component {
    render() {
        if (!this.props.step) return null;

        const stepNo = this.props.idx + 1
        return (
            <div className="edit-box">
                <Link to={`/steps/${this.props.step.id}/edit`}>

                <div className="step-box-title">
                    Step {stepNo}: { this.props.step.title ? 
                        this.props.step.title :
                        "Click to Edit"
                    }
                </div>
                </Link>
            </div>
        );

    }
}

export default StepEditBox