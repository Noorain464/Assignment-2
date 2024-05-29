import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav(){
    return (
            <nav className="menu">
                <h1><Link to="/">Prerak Raja</Link></h1>
                <ul>
                    <li className="active"><Link to="/"><span>Home</span></Link></li>
                    <li><Link to="/about"><span>About</span></Link></li>
                    <li><a href="#education"><span>Education</span></a></li>
                    <li><a href="#experience"><span>Experience</span></a></li>
                    <li><a href="#portfolio"><span>Projects</span></a></li>
                    <li><a href="#skills"><span>Skills</span></a></li>
                    <li><a href="https://drive.google.com/file/d/1pT-Nk6AxY9ZOWBizuDb4htA3IiUF_fSe/view?usp=sharing"><span>Resume</span></a></li>
                    <li><a href="#contacts"><span>Contact</span></a></li>
                </ul>
            </nav>
    )
}
export default Nav;