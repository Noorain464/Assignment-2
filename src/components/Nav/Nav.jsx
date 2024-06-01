import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import pdf from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/Profile.pdf";
function Nav() {
    return (
        <nav>
            <div className="menu"> 
                <h1><Link to="/">Syeda Noorain</Link></h1>
                <ul className="navbar">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#portfolio">Projects</a></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to={pdf}>Resume</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
