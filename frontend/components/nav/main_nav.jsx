import React from 'react'
import { Link } from "react-router-dom";
import SearchContainer from '../search/search_container';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props);
        this.props.requestProjects()
        this.props.history.push('/projects')
    }

    render() {
        return (
            <div className="mainnav">
                <div className="left-main-nav">
                    <div className="logo">
                        <Link to="/">
                            <img src={window.logo} height="60px"/>
                        </Link>
                    </div>
                    <span className="button" onClick={this.handleClick}>Projects</span>

                </div>
                <div className="right-main-nav">
                    <div className="publish-link">
                        <Link to="/projects/create">PUBLISH PURROJECT</Link>
                    </div>
                    <div className="search-bar">
                        <SearchContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainNav