import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
    componentDidMount() {
        this.props.requestProjects();
        this.props.requestUsers();
        this.props.clearSteps();
    }


    render() {
        
        const { projects, users } = this.props;
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