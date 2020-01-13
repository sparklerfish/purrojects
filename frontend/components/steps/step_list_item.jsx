import React from 'react'

class StepListItem extends React.Component {
    render() {
        return (
          <div>
            <h1>{step.title}</h1>
            <p>{step.body}</p>
          </div>
        );

    }
}

export default StepListItem