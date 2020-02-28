import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
    componentDidMount() {
        // this.props.requestProjects();
        this.props.requestUsers();
        this.props.clearSteps();
        // debugger
        if (this.props.location.pathname.includes("search")) {
            this.props.searchProjects(this.props.match.params.query);
        } else {
            this.props.requestProjects();
        }
    }



    render() {
        const { projects, users } = this.props;
        if (projects.length === 0) {
            return (
                <div className="project-list">
                    No projects found!
                </div>
            )
        }
        return(
            <div className="project-list">
                    {projects.map(project => (
                        <ProjectIndexItem project={project} users={users} key={`project-${project.id}`}/>
                    ))}
            </div>
        )
    }
}

export default ProjectIndex;