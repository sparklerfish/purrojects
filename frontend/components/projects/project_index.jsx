import React from 'react';

class ProjectIndex extends React.Component {
    componentDidMount() {
        this.props.requestProjects();
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { projects } = this.props;

        return(
            projects.map(project => (
                <ProjectIndexItem project={project} />
            ))
        )
    }
}

export default ProjectIndex;