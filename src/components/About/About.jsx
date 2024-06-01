import React from 'react';
import Nav from '../Nav/Nav.jsx';
import "./About.css";
import img from "../assets/profile.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faDatabase, faCamera, faE, faCode, faChartSimple, faFileLines , faImage} from '@fortawesome/free-solid-svg-icons';
// import { faGlobe, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

function About(){
    return (
        <>
        <Nav/>
        <div className="about">
                <div className="about-me container">
                    <div className="section-title">
                        <h2>About</h2>
                    </div>
                    <div className="row">
                        <div className="image">
                            <img src={img} className="img-fluid" alt="Profile" />
                        </div>
                        <div className="content">
                            <p>Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure
                                to the underlying concepts and applying them vividly to various projects, my love for these domains came into being.
                                I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.
                            </p>
                            <div className="row">
                                <div className="col1">
                                    <ul>
                                        <li><strong>Birthday:</strong> 12 October 1996</li>
                                        <li><strong>Phone:</strong> +1 480-401-8112</li>
                                    </ul>
                                </div>
                                <div className="col2">
                                    <ul>
                                        <li><strong>City:</strong> Tempe, AZ</li>
                                        <li><strong>Email:</strong> rajaprerak@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="interest container">
                <div class="section-title">
                    <h2>Interests</h2>
                </div>

                <div className="row">
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faGlobe} className='icon-style s' />
                            <h3>Software Development</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faDatabase} className='icon-style d'/>
                            <h3>Machine Learning</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faCamera} className='icon-style c'/>
                            <h3>Computer Vision</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faE} className='icon-style n'/>
                            <h3>Natural Language Processing</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faCode} className='icon-style se'/>
                            <h3>Software Engineering</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faChartSimple} className='icon-style v'/>
                            <h3>Visualization</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faFileLines} className='icon-style a'/>
                            <h3>Algorithms</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faImage} className='icon-style i'/>
                            <h3>Image Processing</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;
