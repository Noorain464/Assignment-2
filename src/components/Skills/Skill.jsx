import React from "react";
import "./Skill.css";
import Nav from "../Nav/Nav";

function Skill(){
    return(
        <>
        <Nav />
        <section className="skills">
            <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <div className="row">
                    <div className="col" >
                        <div className="icon-box">
                            <h4>Languages and Databases</h4>
                            <p>
                            <img src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" alt="" height="50" width="150"/>
                            <img src="https://www.vectorlogo.zone/logos/java/java-horizontal.svg" alt="" height="50" width="120"/>
                            <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt=""/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" height="60" width="90"/>
                            <img src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="" height="70" width="130"/>
                            </p>
                        </div>
                        <div className="icon-box">
                        <h4>Frameworks</h4>
                            <p>
                                <img src="https://www.vectorlogo.zone/logos/springio/springio-ar21.svg" alt=""/>
                            </p>
                        </div>
                        <div className="icon-box">
                            <h4>Tools</h4>
                            <p>
                                <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt=""/>
                                <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" alt=""/>
                                <img src="https://www.vectorlogo.zone/logos/jupyter/jupyter-ar21.svg" alt=""/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Skill;