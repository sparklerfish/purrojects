import React from 'react'
import { Link } from "react-router-dom";

class MainNav extends React.Component {
    render() {
        return (
            <div className="mainnav">
                <div className="left-main-nav">
                    <div className="logo">
                        <Link to="/">
                            <img src={window.logo} height="60px"/>
                        </Link>
                    </div>
                    <Link to="/projects" className="button">Projects</Link>

                </div>
                <div className="right-main-nav">
                    <div className="publish-link">
                        <Link to="/projects/create">PUBLISH PURROJECT</Link>
                    </div>
                    <div className="search-bar">
                        Search coming soon!
                    </div>
                </div>
            </div>
        )
    }
}

export default MainNav