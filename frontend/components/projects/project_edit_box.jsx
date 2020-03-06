import React from 'react'
import { Link } from 'react-router-dom';

class ProjectEditBox extends React.Component {
    constructor(props) {
        super(props)

        this.edit = this.edit.bind(this);
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

    edit(e) {
        // e.preventDefault();
        // e.stopPropagation();
        // console.log(this.props.location);
        if (e.target.className !== "image-box" && e.target.className !== "inputfile") {
            this.props.history.push(`/projects/${this.props.projectId}/edit`)
        }
    }

    thisDerp() {
        console.log("derp")
    }

    handleProjectFile(e) {
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
            this.handleSubmit();
        } else {
            this.setState({ projectsFormData: { [imageUrl]: "", [imageFile]: null } });
        }
        // };
    }

    handleSubmit() {
        console.log("submitting")
        const formData = new FormData();
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
            <div onClick={this.edit}>
                <div className="edit-box">
                    <div className="edit-box-left">
                        <div className="image-box-holder">
                        <label>
                            <div className="image-box">Click to Add Image
                                <input
                                    className='inputfile'
                                    type="file"
                                    onChange={this.thisDerp}
                                    // onChange={console.log("WHAT THE FUCK")}
                                />
                                {/* <input type='file'/> */}
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