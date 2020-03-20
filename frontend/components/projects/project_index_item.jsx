import React from "react";
import { Link } from 'react-router-dom'

class ProjectIndexItem extends React.Component {

    render() {
      if(!this.props) return null;
      if (!this.props.project) return null;
      if (!this.props.project.author) return null;

        return (
          <div className="project-item">
            <Link to={{
              pathname: `/projects/${this.props.project.id}`,
              state: { prevPath: location.pathname }
            }}>
                <div className="project-item-image">
                <img src={this.props.project.imageUrl ? this.props.project.imageUrl : window.placeholder} />
                </div>
            </Link>
            <div className="project-item-info">
              <Link to={{
                pathname: `/projects/${this.props.project.id}`,
                state: {prevPath: location.pathname}
              }}>
                <b>{this.props.project.title}</b>
              </Link>{" "}
              by {this.props.project.author.username}
            </div>
          </div>
        );
    }
}

export default ProjectIndexItem;