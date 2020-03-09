import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class StepEditBox extends React.Component {
    constructor(props) {
        super(props);
        this.deleteStep = this.deleteStep.bind(this);
        this.redirect = this.redirect.bind(this);
        this.state = {
            imageUrl: null,
            imageFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStepFile = this.handleStepFile.bind(this);
    }

    deleteStep(e) {
        e.stopPropagation();
        this.props.destroyStep(this.props.step.id);
    }
    redirect(e) {
        const path = `/steps/${this.props.step.id}/edit`;
        if (e.target.className == "image-box-holder image-box" || e.target.className == "image-box" || e.target.className == "inputfile" || e.target.className == "image-preview" || e.target.className == "image-box-holder" || e.target.className == "image-preview-box") {
            return;
        } else {
            this.props.history.push(path)
        }
    }

    handleStepFile(e) {
        e.stopPropagation();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file });
        };
        if (file) {
            reader.readAsDataURL(file);
            setTimeout(() => this.handleSubmit(), 100)
        } else {
            this.setState( { [imageUrl]: "", [imageFile]: null } );
        }
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('step[project]', this.props.project);
        if (this.state.imageFile) {
            formData.append('step[photo]', this.state.imageFile);
        }
        $.ajax({
            url: `/api/steps/${this.props.step.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    imageForm() {
        return (
            <label>
                <div className="image-box-holder image-box">
                    <div>Click to Add Image
                        <input
                            className='inputfile'
                            type="file"
                            onChange={this.handleStepFile}
                        />
                    </div>

                </div>
            </label>
        )
    }

    previewImage() {
        let image;
        if (this.props.step.imageUrl) {
            image = this.props.step.imageUrl
        } else if (this.state.imageUrl) {
            image = this.state.imageUrl
        }
        return (
            <label>
                <div className="image-box-holder image-box">
                    Click to Change Image
                <div className="image-preview-box">
                        <img className="image-preview" src={image} />

                    </div>
                    <input
                        className='inputfile'
                        type="file"
                        onChange={this.handleStepFile}
                    />
                </div>
            </label>
        )
    }

    render() {
        if (!this.props.step) return null;
        const stepNo = this.props.idx + 1
        return (
            <div onClick={this.redirect}>
                <div className="edit-box">
                    <div className="edit-box-left">
                        <div className="edit-box-left">
                            {this.state.imageUrl || this.props.step.imageUrl ? this.previewImage() : this.imageForm()}
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