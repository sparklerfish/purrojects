import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal'
import ProjectEditBoxContainer from './project_edit_box_container';
import StepEditBoxList from './step_edit_box_list'
import { clearSteps } from '../../actions/step_actions';


class EditProjectIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // if (localStorage.getItem('newProjectId') > 0) {
        //     localStorage.setItem('newProjectId', undefined);
        // }
        // this.props.openModal('title');
        this.props.requestProject(this.props.match.params.projectId);
        this.props.requestSteps(this.props.match.params.projectId);
    }



    noProjectComponent() {
        return (
            <div className="edit-box">
                Intro + Supplies (click to edit)
            </div>
        )
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSteps();
        this.props.history.push(`/projects/${this.props.match.params.projectId}`)
    }



    render() {
        // if (!this.props.project) return null
        // console.log(localStorage.getItem('newProjectId'))
        // debugger
        let emptyStep = { title: "", body: "", project_id: this.props.match.params.projectId }
        return (

            <div className="new-edit-container">
                <center>
                    <div>
                        <div>
                            {(localStorage.getItem('newProjectId') > 0) ?
                                <ProjectEditBoxContainer projectId={this.props.match.params.projectId} /> :
                            this.noProjectComponent()}
                        </div>
                        <StepEditBoxList
                            projectId={this.props.newProjectId}
                            steps={this.props.steps}
                        />
                        <div>
                            <div className="button" onClick={() => this.props.createStep(emptyStep)}>
                                Add Step
                            </div>
                        </div>

                        <div className="new-submit">
                            <Link to={`/projects/${this.props.match.params.projectId}`}>
                                <div className="done-button" onClick={this.handleSubmit}>
                                    Done with Purroject!
                                </div>
                            </Link>
                        </div>


                    </div>
                </center>
            </div>
        )
    }
}

export default EditProjectIndex