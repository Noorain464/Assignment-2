import React from "react";
import "./Educations.css"
import Nav from "../Nav/Nav";
import img1 from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/ASU.jpg";
import img2 from "/home/syeda/Desktop/Assignment-2/assignment-2/src/components/assets/au.png";
function Education(){
    return(
        <>
        <Nav />
        <section id="education" className="services">
            <div className="container">
            <div className="section-title">
                <h2>Education</h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className="education-icon-box" >
                        <img src={img1} className="img-fluid" alt=""/>
                        <p><em>MS in Computer Science</em></p>
                        <h5>Janurary 2021 - Present</h5>
                        <h6>Relevant Coursework</h6>
                        <ul>
                            <li>Distributed Database Systems</li>
                            <li>Cloud Computing</li>
                            <li>Foundation Of Algorithms</li>
                        </ul>
                    </div>
                    <div className="education-icon-box">
                    <img src={img2} className="img-fluid" alt="" />
                    <p><em>B.Tech. in Information and Communication Technology</em></p>
                    <h5 >July 2014 - May 2018</h5>
                    <h6>Relevant Coursework</h6>
                    <ul>
                
                        <li>Database Management Systems</li>
            
                        <li>Algorithms &amp; Optimization for Big Data</li>
                        <li>Machine Learning</li>
        
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        
        
            <div className="portfolio">
            <div className="container">
            <div className="section-title">
                <h2>Online Certification</h2>
            </div>
        
            
            </div>
            </div>
        </section>
        </>
    )
}
export default Education;