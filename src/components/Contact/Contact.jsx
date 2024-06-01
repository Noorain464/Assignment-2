import React from "react";
import "./Contact.css";
import Nav from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/Nav/Nav.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <>
            <Nav />
            <section id="contacts" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div className="row">

                        <div className="col">
                            <div className="info-box">
                                <FontAwesomeIcon icon={faLocationDot} className="bx" />
                                <h3>My Address</h3>
                                <p>#3423 Pulikeshi Road</p>
                                <p>Tilaknagar</p>
                                <p>Mysore - 570021</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="info-box">
                                <FontAwesomeIcon icon={faShareNodes} className="bx" />
                                <h3>Social Profiles</h3>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/syeda-noorain-b809a22a2" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="https://www.github.com/Noorain464" className="github"><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="mailto:noorainsyeda464@gmail.com" className="google"><FontAwesomeIcon icon={faGoogle} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="info-box">
                                <FontAwesomeIcon icon={faEnvelope} className="bx" />
                                <h3>Email</h3>
                                <p>noorainsyeda464@gmail.com</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="info-box">
                                <FontAwesomeIcon icon={faPhone} className="bx" />
                                <h3>Contact</h3>
                                <p>+91 - 9972521333</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
