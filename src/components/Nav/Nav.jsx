import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="menu">
            <h1><Link to="/">Syeda Noorain</Link></h1>
            <ul>
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="https://drive.google.com/file/d/1pT-Nk6AxY9ZOWBizuDb4htA3IiUF_fSe/view?usp=sharing">Resume</a></li>
                <li><a href="#contacts">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
