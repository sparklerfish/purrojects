import React from 'react'
// import { withRouter } from 'react-router-dom';

class EditStepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.step;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        // debugger
        this.props.history.push(`/projects/${this.props.step.project_id}/update`)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (

            <div style={{ zIndex: 15, paddingTop: '100px' }}>
                <center>
                    <div className="form-container">
                        <form onSubmit={this.handleSubmit}>

                            <label htmlFor="title">
                                <input type="text"
                                    value={this.state.title}
                                    onChange={this.update("title")}
                                    className="update-title-input"
                                />
                            </label>

                            <label htmlFor="body">
                                <textarea
                                    value={this.state.body}
                                    onChange={this.update("body")}
                                    className="update-body-input"
                                />
                            </label>
                            <input type="submit" value="Save" className="save-step-button"/>
                            <br/>
                        </form>
                    </div>
                </center>
            </div>
        )
    }
}

export default EditStepForm;
