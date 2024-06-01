import React from "react";
import "./Educations.css"
import Nav from "../Nav/Nav";
function Education(){
    return(
        <>
        <Nav />
        <section id="education" class="services">
            <div class="container">
            <div class="section-title">
                <h2>Education</h2>
            </div>
            <div class="row">
                <div class="col-lg-12" data-aos="fade-up">
                    <div class="col-md-4 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" >
                    <img src="assets/img/education/ASU.jpg" class="img-fluid" alt=""/>
                    <p><em>MS in Computer Science</em></p>
                    <h5>Janurary 2021 - Present</h5>
                    <h6>Relevant Coursework</h6>
                    <ul>
                        <li>Distributed Database Systems</li>
                        <li>Cloud Computing</li>
                        <li>Foundation Of Algorithms</li>
                    </ul>
                    </div>
                    <div class="col-md-4 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" >
                    <img src="assets/img/education/au.png" class="img-fluid" alt="" />
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
        
        
            <div class="portfolio">
            <div class="container">
            <div class="section-title">
                <h2>Online Certification</h2>
            </div>
        
            <div class="row portfolio-container" >
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-app" >
                <div class="portfolio-wrap">
                    <img src="assets/img/certification/stanford.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-info">
                    <h4>Machine Learning</h4>
                    <div class="portfolio-links">
                        <a href="https://www.coursera.org/account/accomplishments/certificate/2BTJ636Q2E93?utm_medium=certificate&amp;utm_source=link&amp;utm_campaign=copybutton_certificate/"  title="Certificate"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>
                </div>
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-app" >
                <div class="portfolio-wrap">
                    <img src="assets/img/certification/stanford.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-info">
                    <h4>Algorithms-Design and Analysis</h4>
                    <div class="portfolio-links">
                        <a href="https://www.coursera.org/account/accomplishments/certificate/6THRQXYE9EHZ?utm_medium=certificate&amp;utm_source=link&amp;utm_campaign=copybutton_certificate" title="Certificate"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>
                </div>
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                    <img src="assets/img/certification/ucsd.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-info">
                    <h4>Algorithmic Toolbox</h4>
                    <div class="portfolio-links">
                        <a href="https://coursera.org/share/98bbfb990484fac370d5e5ed14334ea4" title="Certificate"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>
                </div>
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-project">
                <div class="portfolio-wrap">
                    <img src="assets/img/certification/ibm.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                    <h4>Deep Learning with Tensorflow</h4>
                    <div class="portfolio-links">
                        <a href="https://drive.google.com/file/d/1FSwPt19EzY_tpvqkE6igtLf3gccKcssC/view?usp=sharing"title="Certificate"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>
                </div>
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-project">
                <div class="portfolio-wrap">
                    <img src="assets/img/certification/ibm.jpg" class="img-fluid" alt=""/>
                    <div class="portfolio-info">
                    <h4>Machine Learning with Python</h4>
                    <div class="portfolio-links">
                        <a href="https://drive.google.com/file/d/1gimySw_NPzCJ54dqZ2j2wYyz-JDOg-S0/view?usp=sharing"  title="Certificate"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>
                </div>
        
        
                <div class="col-lg-4 col-md-6 portfolio-item filter-project">
                <div class="portfolio-wrap">
                    <img src="assets/img/certification/dai.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                    <h4>Neural Networks and Deep Learning</h4>
                    <div class="portfolio-links">
                        <a href="https://www.coursera.org/account/accomplishments/certificate/ELXZ6FE2BU7X?utm_medium=certificate&amp;utm_source=link&amp;utm_campaign=copybutton_certificate/" title="Certificate"><i class="bx bx-link"></i></a>
                    </div>
                    </div>
                </div>
                </div>
        
            </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Education;