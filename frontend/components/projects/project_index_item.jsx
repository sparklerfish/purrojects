import React from "react";
import { Link } from 'react-router-dom'

const ProjectIndexItem = props => {
  if (!props) return null;
  if (!props.project) return null;
  if (!props.project.author) return null;

    return (
      <div className="project-item">
        <Link to={{
          pathname: `/projects/${props.project.id}`,
          state: { prevPath: location.pathname }
        }}>
            <div className="project-item-image">
            <img src={props.project.imageUrl ? props.project.imageUrl : window.placeholder} />
            </div>
        </Link>
        <div className="project-item-info">
          <Link to={{
            pathname: `/projects/${props.project.id}`,
            state: {prevPath: location.pathname}
          }}>
            <b>{props.project.title}</b>
          </Link>{" "}
          by {props.project.author.username}
        </div>
      </div>
    );
}

export default ProjectIndexItem;