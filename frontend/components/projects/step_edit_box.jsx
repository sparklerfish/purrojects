import React from 'react'
import { Link } from 'react-router-dom';

class StepEditBox extends React.Component {
    render() {
        if (!this.props.step) return null;

        const stepNo = this.props.idx + 1
        return (
            <Link to={`/steps/${this.props.step.id}/edit`}>
                <div className="edit-box">

                    <div className="step-box-title">
                        Step {stepNo}: { this.props.step.title ? 
                            this.props.step.title :
                            "Click to Edit"
                        }
                    </div>
                </div>
            </Link>
        );

    }
}

export default StepEditBox