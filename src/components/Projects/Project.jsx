import React from "react";
import "../Projects/Project.css";
import gif from "../assets/coming.gif";
import Nav from "../Nav/Nav";
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
