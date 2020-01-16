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
        <div className="edit-box">
            <Link to={`/projects/${this.props.projectId}/edit`}>
            Intro + Supplies: {this.props.project.title}
            </Link>
        </div>
        )

    }
}

export default ProjectEditBox