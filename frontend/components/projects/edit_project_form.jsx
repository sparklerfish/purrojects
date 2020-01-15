import React from 'react'
import { withRouter } from 'react-router-dom';
import Modal from './modal'

class NewProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.project;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    componentDidMount() {
        this.props.openModal('title');
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div style={{zIndex: 15, paddingTop: '100px'}}>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="body">
                        <textarea
                            value={this.state.body}
                            onChange={this.update("body")}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
            </div>
        )
    }
}

export default withRouter(EditProjectForm);
