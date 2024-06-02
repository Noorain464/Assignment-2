import React from "react";
import Nav from "../Nav/Nav";
import gif from "./components/assets/coming-soon-button-sliding-mobile-art-oeva2rqfq38o1vd0.gif";
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
