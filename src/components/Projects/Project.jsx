import React from "react";
import "./src/components/Projects/Project.css";
import gif from "./src/components/assets/coming-soon-button-sliding-mobile-art-oeva2rqfq38o1vd0.gif";
import Nav from "./src/components/Nav/Nav.jsx";
function Project(){
    return(
        <>
        <Nav />
        <div className="Project-container">
            <img src={gif} alt="" className="Project"/>
        </div>
        </>

    )
}
export default Project;
