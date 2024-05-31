import React from 'react';
import Nav from '../Nav/Nav.jsx';
import "./About.css";
import img from "../assets/profile.jpeg";

function About(){
    return (
        <div id="about" className="about">
            <Nav/>
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
                        <div className="details">
                            <ul>
                                <li><strong>Birthday:</strong> 12 October 1996</li>
                                <li><strong>Phone:</strong> +1 480-401-8112</li>
                            </ul>
                            <ul>
                                <li><strong>City:</strong> Tempe, AZ</li>
                                <li><strong>Email:</strong> rajaprerak@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="interests">
                <h2>Interests</h2>
                <div className="interest-grid">
                    <div className="interest-item">Software Development</div>
                    <div className="interest-item">Machine Learning</div>
                    <div className="interest-item">Computer Vision</div>
                    <div className="interest-item">Natural Language Processing</div>
                    <div className="interest-item">Software Engineering</div>
                    <div className="interest-item">Visualization</div>
                    <div className="interest-item">Algorithms</div>
                    <div className="interest-item">Image Processing</div>
                </div>
            </div>
        </div>
    )
}

export default About;
