import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

const CreateProject = () => (
    <div>
        <div className="create-container">
            <div className="create-image"></div>
            <div className="create-text">
                <div className="big-create-text">
                    SHARE WHAT YOU MAKE WITH PURROJECTS
                </div>
                <div className="small-create-text">
                    Purrojects is a platform for you to share what you make for cats through words, photos, video and files.

                    From a one step cat treat recipe to a 100 step cat playground build, everyone has something to share.

                    Join the biggest DIY community for cats on the web.
                    <br/>
                    <br/>
                </div>
                <Link to='/projects/new'>
                    <button className="create-button">
                        New Purroject
                    </button>

                </Link>
            </div>
        </div>
        <Footer/>
    </div>
);

export default CreateProject;