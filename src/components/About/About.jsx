import React from 'react';
import Nav from '../Nav/Nav.jsx';
import "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/About/About.css";
import img from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/profile.jpeg";
function About(){
    return (
        
    <div id="about" className="about">
        <Nav/>
        <div className="about-me container">

            <div className="section-title">
                <h2>About</h2>
            </div>

            <div className="row">
                <div>
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className= "content">
                    <p>Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure
                        to the underlying concepts and applying them vividly to various projects, my love for these domains came into being.
                        I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.
                    </p>
                    <div className="row">
                        <div className="left">
                            <ul>
                                <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 12 October 1996</li>
                                <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +1 480-401-8112</li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Tempe, AZ</li>
                                <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> rajaprerak@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;
