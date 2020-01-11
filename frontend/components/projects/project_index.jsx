import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
    componentDidMount() {
        this.props.requestProjects();
    }

    render() {
        const { projects } = this.props;
        // debugger
        return(
            <div className="project-list">
                <ul>
                    {projects.map(project => (
                        <ProjectIndexItem project={project} key={project.id}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProjectIndex;