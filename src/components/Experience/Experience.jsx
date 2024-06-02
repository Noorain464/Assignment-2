import React from "react";
import "./src/components/Experience/Experience.css";
import gif from "./src/components/assets/coming-soon-button-sliding-mobile-art-oeva2rqfq38o1vd0.gif";
import Nav from "./src/components/Nav/Nav.jsx";
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
