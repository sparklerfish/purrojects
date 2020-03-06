import React from 'react'
import { Link } from 'react-router-dom';

class ProjectEditBox extends React.Component {
    constructor(props) {
        super(props)

        this.redirect = this.redirect.bind(this);
        this.state = ({
            imageUrl: null,
            imageFile: null
        })
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProjectFile = this.handleProjectFile.bind(this);
    };

    componentDidMount() {
        this.props.requestProject(this.props.projectId)
    }

    redirect(e) {
        if (e.target.className !== "image-box" && e.target.className !== "inputfile") {
            this.props.history.push(`/projects/${this.props.projectId}/edit`)
        }
    }

    handleProjectFile(e) {
        console.log("uploading")
        e.stopPropagation();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ imageUrl: reader.result, imageFile: file });
        };
        if (file) {
            reader.readAsDataURL(file);
            this.handleSubmit();
            setTimeout(() => this.handleSubmit(), 100)
        } else {
            this.setState({ [imageUrl]: "", [imageFile]: null });
        }
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('project[id]', this.props.projectId);
        if (this.state.imageFile) {
            formData.append('project[photo]', this.state.imageFile);
        }
        $.ajax({
            url: `/api/projects/${this.props.project.id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    render() {
        if (!this.props.project) return null;

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
                                    onChange={this.handleProjectFile}
                                />
                            </div>
                        </label>
                        </div>
                    </div>
                    <div className="edit-box-right">
                        <div className="step-box-title">
                        Intro + Supplies: {this.props.project.title}
                        </div>
                        <img src={window.caret} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectEditBox