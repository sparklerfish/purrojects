import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
    <div>
        <div className="splash-container">

            <div className="not-found-image"></div>
            <div className="not-found-text">
                <div className="not-found-title">OH NO! PAGE NOT FOUND</div>
                <div className="not-found-body">
                    We couldn't find that page.<br/>
                    Check your URL or <b><Link to={"/"}>go back to the home page.</Link></b>
                </div>
            </div>        
        </div>
    </div>
);

export default NotFound;