import React from 'react';
import Nav from '../Nav/Nav.jsx';
import "./About.css";
import img from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/PIc.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faDatabase, faCamera, faE, faCode, faChartSimple, faFileLines , faImage} from '@fortawesome/free-solid-svg-icons';

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
                                        <li><strong>Birthday:</strong> 4 June 2004</li>
                                        <li><strong>Phone:</strong> +91 9972521333</li>
                                    </ul>
                                </div>
                                <div className="col2">
                                    <ul>
                                        <li><strong>City:</strong> Mysore</li>
                                        <li><strong>Email:</strong> noorainsyeda464@gmail.com</li>
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
                            <FontAwesomeIcon icon={faGlobe} className='icon-style' />
                            <h3>Software Development</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faDatabase} className='icon-style'/>
                            <h3>Machine Learning</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faCamera} className='icon-style'/>
                            <h3>Computer Vision</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faE} className='icon-style'/>
                            <h3>Natural Language Processing</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faCode} className='icon-style'/>
                            <h3>Software Engineering</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faChartSimple} className='icon-style'/>
                            <h3>Visualization</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faFileLines} className='icon-style'/>
                            <h3>Algorithms</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faImage} className='icon-style'/>
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
