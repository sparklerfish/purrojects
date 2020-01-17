import React from 'react';
import { Link } from 'react-router-dom';
import ProjectEditBoxContainer from './project_edit_box_container';
import StepEditBoxList from './step_edit_box_list'


class EditProjectIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            project: this.props.project,
            steps: {}
        }
    }

    componentDidMount() {
        this.props.clearSteps();
        this.props.requestProject(this.props.match.params.projectId);
        this.props.requestSteps(this.props.match.params.projectId);
    }



    noProjectComponent() {
        return (
            <div className="edit-box">
                <div className="edit-box-left">
                    <div className="image-box-holder">
                        <div className="image-box">
                            Image Upload Coming Soon!
                        </div>
                    </div>
                </div>
                <div className="edit-box-right">
                    <div className="step-box-title">

                        Intro + Supplies: (Click to Edit)
                    </div>
                    <img src={window.caret} />

                </div>
            </div>
        )
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSteps();
        this.props.history.push(`/projects/${this.props.match.params.projectId}`)
    }



    render() {
        let emptyStep = { title: "", body: "", project_id: this.props.match.params.projectId }
        return (
            <div className="new-edit-container">
                <div>
                    <div>
                        {(localStorage.getItem('newProjectId') > 0) ?
                            <ProjectEditBoxContainer projectId={this.props.match.params.projectId} /> :
                        this.noProjectComponent()}
                    </div>
                    <StepEditBoxList
                        projectId={this.props.newProjectId}
                        steps={this.props.steps}
                        destroyStep={this.props.destroyStep}
                    />
                    <div>
                        <div className="add-step-button" onClick={() => this.props.createStep(emptyStep)}>
                            Add Step
                        </div>
                    </div>

                    <div className="new-submit">
                        <center>
                            <Link to={`/projects/${this.props.match.params.projectId}`}>
                                <div className="done-button" onClick={this.handleSubmit}>
                                    Done with Purroject!
                                </div>
                            </Link>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProjectIndex