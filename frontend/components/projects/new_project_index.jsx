import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal'


class NewProjectIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    

    componentDidMount() {
        this.props.openModal('title');
        localStorage.setItem('newProjectId', undefined);
    }




    render() {
        // if (!this.props.project) return null
        if (!this.props.steps) return null
        // console.log(localStorage.getItem('newProjectId'))
        return (

            <div style={{ zIndex: 15, paddingTop: '100px' }}>
                <Modal />
                <div>
                    {(localStorage.getItem('newProjectId') > 0) ? <div>there's a project with id {this.props.newProjectId}</div> : <div>no project yet</div> }
                    project edit link
                </div>
                <div>
                    step edit links
                </div>
                <div>
                    add step button
                </div>
            </div>
        )
    }
}

export default NewProjectIndex