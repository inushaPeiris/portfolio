import React from "react"
import '../styles.css'
import EducationImg from '../assets/education.png';
import ExperienceImg from '../assets/experience.png';
import Arrow from '../assets/arrow.png';

export default function About(){
    return(
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="text">About Me</h1><br /><br />
            <div className="section-container">
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container-0">
                            <img src={EducationImg} alt="Education icon" className="icon"/>
                            <h3 className="small-text-black">Education</h3>
                            <p className="small-text-black">
                                Bachelor of Software Engineering Honours (UG)
                            </p>
                        </div>
                        <div className="details-container-0">
                            <img src={ExperienceImg} alt="Experience icon" className="icon"/>
                            <h3 className="small-text-black">Experience</h3>
                            <p className="small-text-black">
                            2+ years of experience in web development <br />
                            with a strong focus on front-end and back-end
                            technologies.
                            </p>
                        </div>
                        <div className="text-container">
                            <p className="small-text-black">
                                I am driven by a love for coding and problem-solving, 
                                constantly seeking opportunities to expand my skill set 
                                and apply my knowledge to real-world projects. As a web developer, 
                                I've had the privilege of diving into the ever-evolving realms of 
                                HTML, CSS, JavaScript, and beyond, exploring innovative ways to bring 
                                ideas to life on the web.
                            </p><br />
                            <p className="small-text-black">
                                My goal is not just to build websites and applications, 
                                but to craft seamless and user-centric digital solutions that 
                                leave a lasting impression. I'm excited about the prospect of 
                                collaborating with experienced professionals, learning from 
                                their expertise, and contributing my enthusiasm and dedication 
                                to a dynamic team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Arrow} alt="Arrow icon" className="icon arrow"
                onClick={() => window.location.href='./#skills'} />
        </section>
    )
}


