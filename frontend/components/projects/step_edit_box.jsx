import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class StepEditBox extends React.Component {
    constructor(props) {
        super(props);
        this.deleteStep = this.deleteStep.bind(this);
        this.redirect = this.redirect.bind(this);
        this.state = ({
            imageUrl: null,
            imageFile: null
        })
    }

    deleteStep(e) {
        e.stopPropagation();
        this.props.destroyStep(this.props.step.id);
    }

    redirect() {
        let path = `/steps/${this.props.step.id}/edit`;
        this.props.history.push(path);
    }

    handleStepFile() {
        return e => {
            const reader = new FileReader();
            const file = e.currentTarget.files[0];
            reader.onloadend = () => {
                this.setState({ imageUrl: reader.result, imageFile: file });
            };
            if (file) {
                reader.readAsDataURL(file);
            } else {
                this.setState({ stepsFormData: { [imageUrl]: "", [imageFile]: null } });
            }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('step[title]', this.state.title);
        if (this.state.photoFile) {

            formData.append('step[photo]', this.state.photoFile);
        }
        $.ajax({
            url: '/api/steps',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    render() {
        if (!this.props.step) return null;

        const stepNo = this.props.idx + 1
        return (
            <div onClick={this.redirect}>
                <div className="edit-box">
                    <div className="edit-box-left">
                        <div className="image-box-holder">
                            <div className="image-box">
                                <label>Click to Add Image
                                    <input
                                        className='inputfile'
                                        type="file"
                                        onChange={this.handleStepFile()}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="edit-box-right">
                        <div className="step-box-title">
                            Step {stepNo}: {this.props.step.title ?
                                this.props.step.title :
                                "Click to Edit"
                            }
                        </div>
                        <img src={window.caret} />
                        <div
                            className="delete-step"
                            onClick={this.deleteStep}>
                            ×
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(StepEditBox);