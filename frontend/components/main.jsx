import React from "react";
import Splash from "./splash";
import ProjectIndexContainer from "./projects/project_index_container";

const Main = () => {
    return (
        <div>
            <Splash/>
            <ProjectIndexContainer/>
        </div>
    )
}

export default Main;