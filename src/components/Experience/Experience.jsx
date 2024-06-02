import React from "react";
import "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Experience/Experience.css";
import gif from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/coming-soon-button-sliding-mobile-art-oeva2rqfq38o1vd0.gif";
import Nav from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Nav/Nav.jsx";
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