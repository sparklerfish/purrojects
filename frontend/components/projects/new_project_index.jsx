import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal'
import ProjectEditBoxContainer from './project_edit_box_container';
import StepEditBoxList from './step_edit_box_list'


class NewProjectIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.openModal('title');
        localStorage.setItem('newProjectId', undefined);
        this.props.requestProject(this.props.newProjectId);
        this.props.requestSteps(this.props.match.params.projectId);
    }

    noProjectComponent() {
        return (
            <div className="edit-box">
                Intro + Supplies (click to edit)
            </div>
        )
    }


    render() {
        // if (!this.props.project) return null
        // console.log(localStorage.getItem('newProjectId'))
        // debugger
        let emptyStep = {title: "", body: "", project_id: this.props.newProjectId}
        return (

            <div className="new-edit-container">
                <Modal />
                <center>
                    <div>
                        <div>
                            {(localStorage.getItem('newProjectId') > 0) ?
                            <ProjectEditBoxContainer projectId={this.props.newProjectId}/> :
                            this.noProjectComponent() }
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
                    </div>
                </center>
            </div>
        )
    }
}

export default NewProjectIndex