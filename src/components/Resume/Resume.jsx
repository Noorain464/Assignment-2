import React from "react";
import Nav from "../Nav/Nav";
import gif from "../assets/coming.gif";
function Resume(){
    return(
        <>
        <Nav />
        <div className="Resume-container">
            <img src={gif} alt="" className="Resume"/>
        </div>
        </>
    )
}
export default Resume;
