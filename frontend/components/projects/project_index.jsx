import React, { useEffect } from 'react';
import ProjectIndexItem from './project_index_item';
import Footer from '../footer/footer';

const ProjectIndex = props => {
    const { projects, users } = props;

    useEffect(() => {
        props.requestUsers();
        props.clearSteps();
        if (props.location.pathname.includes("search")) {
            props.searchProjects(props.match.params.query);
        } else {
            props.requestProjects();
        }    
    }, []);

    if (projects.length === 0) {
        return (
            <>
                <div className="project-list">
                    No projects found!
                </div>
                <Footer />
            </>
        )
    }
    
    return (
        <>
            <div className="project-list">
                {projects.map(project => (
                    <ProjectIndexItem project={project} users={users} key={`project-${project.id}`}/>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default ProjectIndex;