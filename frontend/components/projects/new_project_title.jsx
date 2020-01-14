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
            <div style={{ zIndex: 15, paddingTop: '100px' }}>
                <form onSubmit={this.handleSubmit}>
                    I made a purroject called:
                    <label htmlFor="title">
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update("title")}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}

export default NewProjectTitle;
