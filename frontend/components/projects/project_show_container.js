import requestProject from '../../actions/project_actions'
import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapDispatchToProps = (dispatch) => ({
    requestProject: projectId => dispatch(requestProject(projectId))
})

const mapStateToProps = (state, ownProps) => {
    const project = state.entities.projects[ownProps.match.params.projectId];
    return {
        project,
        steps: selectProjectItems(state, project),
    };
}

const selectProjectItems = (state, project) => {
  return project ? project.step_ids.map(id => state.entities.steps[id]) : [];
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);