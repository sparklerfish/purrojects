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
                    Intro + Supplies: {this.props.project.title}
                </div>
            </Link>
        )

    }
}

export default ProjectEditBox