import React from "react";
import "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Projects/Project.css";
import gif from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/coming-soon-button-sliding-mobile-art-oeva2rqfq38o1vd0.gif";
import Nav from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Nav/Nav.jsx";
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
