import React from "react";

class ProjectIndexItem extends React.Component {
    render() {
        return (
          <div className="project-item">
            <div className="project-item-image">
              <img src={this.props.project.picture_url} />
            </div>
            <div className="project-item-info">
              <b>{this.props.project.title}</b> by{" "}
              {this.props.project.author.username}
            </div>
          </div>
        );
    }
}

export default ProjectIndexItem;