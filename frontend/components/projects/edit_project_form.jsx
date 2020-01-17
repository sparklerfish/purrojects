import React from 'react'

class EditProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.props.history.push(`/projects/${this.props.project.id}/update`)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {

        return (
            
            <div style={{zIndex: 15, paddingTop: '100px'}}>
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
                                    placeholder="Type your description..."
                                    value={this.state.body}
                                    onChange={this.update("body")}
                                    className="update-body-input"
                                />
                            </label>
                            <input type="submit" value="Save" className="save-step-button" />
                            <br/>
                        </form>
                    </div>
                </center>
            </div>
        )
    }
}

export default EditProjectForm;
