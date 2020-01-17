import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal'
import ProjectEditBoxContainer from './project_edit_box_container';
import StepEditBoxList from './step_edit_box_list'
// import { clearSteps } from '../../actions/step_actions';


class NewProjectIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            steps: {}
        }
    }

    componentDidMount() {
        // if (localStorage.getItem('newProjectId') > 0) {
        //     localStorage.setItem('newProjectId', undefined);
        // }
        localStorage.setItem('newProjectId', undefined);
        this.props.openModal('title');
        this.props.requestProject(this.props.newProjectId);
        this.props.clearSteps();
        this.props.requestSteps(this.props.match.params.projectId);
    }



    noProjectComponent() {
        return (
            // <center>
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
            // </center>
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.clearSteps();
        this.props.history.push(`/projects/${this.props.newProjectId}`)
    }


    render() {
        // if (!this.props.match.params.projectId) return null
        // console.log(localStorage.getItem('newProjectId'))
        // debugger
        let emptyStep = {title: "", body: "", project_id: this.props.newProjectId}
        return (

            <div className="new-edit-container">

                <Modal />
                {/* <center> */}
                    <div>
                        <div>
                            {(localStorage.getItem('newProjectId') > 0) ?
                            <ProjectEditBoxContainer projectId={this.props.newProjectId}/> :
                            this.noProjectComponent() }
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
                            <Link to={`/projects/${this.props.newProjectId}`}>
                                <div className="done-button" onClick={this.handleSubmit}>
                                    Done with Purroject!
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </center> */}
            </div>
        )
    }
}

export default NewProjectIndex