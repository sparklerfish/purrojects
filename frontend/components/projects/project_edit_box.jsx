import React from 'react'
import { Link } from 'react-router-dom';

class ProjectEditBox extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.requestProject(this.props.projectId)
    }

    render() {
        if (!this.props.project) return null;

        return (
            <Link to={`/projects/${this.props.projectId}/edit`}>
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

                        Intro + Supplies: {this.props.project.title}
                        </div>
                        <img src={window.caret} />

                    </div>
                </div>
            </Link>
        )

    }
}

export default ProjectEditBox