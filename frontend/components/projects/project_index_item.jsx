import React from "react";

class ProjectIndexItem extends React.Component {
    render() {
        debugger
        return (
            <div className="project-item">
                <div className="project-item-image">
                    Project photo goes here
                </div>
                <div className="project-item-info">
                    {this.props.project.title} by {this.props.project.author.username}
                </div>
            </div>
        )
    }
}

export default ProjectIndexItem;