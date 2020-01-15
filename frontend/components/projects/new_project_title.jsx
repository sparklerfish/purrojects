import React from 'react'

class NewProjectTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.closeModal();
        this.props.createProject(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
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
                    <br/>
                    <input className="modal-button" type="submit" value="Start Purroject »" />
                </form>

            </div>
        )
    }
}

export default NewProjectTitle;
