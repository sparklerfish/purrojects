import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
    componentDidMount() {
        // debugger
        this.props.requestProjects();
        this.props.requestUsers();
    }


    render() {
        
        const { projects, users } = this.props;
        // debugger
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