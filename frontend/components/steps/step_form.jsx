import React from 'react'

class StepForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.step;
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="title">
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.update("title")}
                        />
                    </label>
                    <label for="body">
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

export default StepForm;