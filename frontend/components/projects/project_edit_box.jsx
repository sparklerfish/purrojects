import React from 'react'

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
            Intro + Supplies: {this.props.project.title}
        </div>
        )

    }
}

export default ProjectEditBox