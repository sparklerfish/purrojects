import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class StepEditBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleDelete(e) {
        e.stopPropagation();
        this.props.destroyStep(this.props.step.id);
    }

    handleRedirect() {
        let path = `/steps/${this.props.step.id}/edit`;
        this.props.history.push(path);
    }

    render() {
        if (!this.props.step) return null;

        const stepNo = this.props.idx + 1
        return (
            <div onClick={this.handleRedirect}>
                <div className="edit-box">
                    <div className="edit-box-left">
                        <div className="image-box-holder">
                            <div className="image-box">
                                Image Upload Coming Soon!
                            </div>
                        </div>
                    </div>
                    <div className="edit-box-right">
                        <div className="step-box-title">
                            Step {stepNo}: { this.props.step.title ? 
                                this.props.step.title :
                                "Click to Edit"
                            }
                        </div>
                        <img src={window.caret} />
                        <div 
                            className="delete-step" 
                            onClick={this.handleDelete}>
                                ×
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(StepEditBox);