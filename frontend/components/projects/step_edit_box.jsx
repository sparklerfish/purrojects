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
        console.log("redirecting")
        console.log(e.target.className)
        const path = `/steps/${this.props.step.id}/edit`;
        if (e.target.className !== "image-box" && e.target.className !== "inputfile") {
            this.props.history.push(path);
        }
    }

    handleStepFile(e) {
        console.log("uploading")
        // return e => {
        e.stopPropagation();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        // console.log("what does this do")
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file });
        };
        if (file) {
            reader.readAsDataURL(file);
            console.log(file);
            setTimeout(() => this.handleSubmit(), 100)
            // this.handleSubmit();
        } else {
            this.setState( { [imageUrl]: "", [imageFile]: null } );
        }
        // };
    }

    handleSubmit() {
        console.log("submitting")
        // e.preventDefault();
        // e.stopPropagation();
        const formData = new FormData();
        // formData.append('step[title]', this.state.title);
        formData.append('step[project]', this.props.project);
        console.log(this.state)
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

    render() {
        if (!this.props.step) return null;
        const stepNo = this.props.idx + 1
        return (
            <div onClick={this.redirect}>
                <div className="edit-box">
                    <div className="edit-box-left">
                        <div className="image-box-holder">
                            <label>
                                <div className="image-box">Click to Add Image
                                        <input
                                            className='inputfile'
                                            type="file"
                                            onChange={this.handleStepFile}
                                        />
                                </div>
                            </label>
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