import React from 'react'

class NewProjectTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.createProject(this.state)
            // .then(project => {
            //     debugger; 
            //     localStorage.setItem('newProjectId', project.id)
            // })
        .then(() => this.props.closeModal());
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        // debugger
        if (this.props.errors.length > 0) {
            return (
                <ul className="project-errors">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>{error}</li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }

    

    render() {
        return (
            <div>
                <img className="modal-image" src={window.modal_header}/>
                <br/>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    I made a purroject called:
                    <br/>
                    <label htmlFor="title">
                        <input
                            type="text"
                            className="title-input"
                            value={this.state.title}
                            onChange={this.update("title")}
                        />
                    </label>
                    {this.renderErrors()}
                    <input className="modal-button" type="submit" value="Start Purroject »" />
                </form>

            </div>
        )
    }
}

export default NewProjectTitle;
