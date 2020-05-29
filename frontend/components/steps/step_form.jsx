import React, { useState } from 'react'

const StepForm = props => {
    const [step, setStep] = useState(props.step)

    const handleSubmit = e => {
        e.preventDefault();
        props.action(step);
    }

    const update = field => {
        return e => setStep({ [field]: e.currentTarget.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="title">
                    <input
                        type="text"
                        value={state.title}
                        onChange={update("title")}
                    />
                </label>
                <label for="body">
                    <textarea
                        value={state.body}
                        onChange={update("body")}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default StepForm;