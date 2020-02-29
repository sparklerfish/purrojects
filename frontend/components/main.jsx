import React from "react";
import Splash from "./splash";
import ProjectIndexContainer from "./projects/project_index_container";

const Main = () => {
    return (
        <div>
            <Splash/>
            <div className="project-index">
            <h2>EXPLORE PURROJECTS</h2>
            </div>
            <ProjectIndexContainer/>
        </div>
    )
}

export default Main;