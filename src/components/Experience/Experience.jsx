import React from "react";
import "../Experience/Experience.css";
import gif from "../assets/coming.gif";
import Nav from "../Nav/Nav";
function Experience(){
    return(
        <>
        <Nav />
        <div className="experience-container">
            <img src={gif} alt="" className="experience"/>
        </div>
        </>

    )
}
export default Experience;
