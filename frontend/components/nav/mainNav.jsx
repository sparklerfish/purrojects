import React from 'react'
import { Link } from "react-router-dom";

class MainNav extends React.Component {
    render() {
        return (
            <div className="mainnav">
                <div className="logo">
                    <Link to="/">
                        <img src={window.logo} height="60px"/>
                    </Link>
                </div>
                <Link to="/projects" className="button"></Link>
            </div>
        )
    }
}

export default MainNav