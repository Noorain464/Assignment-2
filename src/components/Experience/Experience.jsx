import React from "react";
import "./components/Experience/Experience.css";
import gif from "./components/assets/coming-soon-button-sliding-mobile-art-oeva2rqfq38o1vd0.gif";
import Nav from "./components/Nav/Nav.jsx";
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