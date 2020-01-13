import React from 'react'

class StepListItem extends React.Component {
    render() {
        return (
          <div>
            <h1>{this.props.step.title}</h1>
            <p>{this.props.step.body}</p>
          </div>
        );

    }
}

export default StepListItem