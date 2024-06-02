import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
    return (
        <nav>
            <div className="menu"> 
                <h1><Link to="/">Syeda Noorain</Link></h1>
                <ul className="navbar">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="experience">Experience</Link></li>
                    <li><Link to="project">Projects</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contacts">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
