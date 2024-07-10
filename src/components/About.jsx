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
                        <div className="details-container-1">
                            <img src={EducationImg} alt="Education icon" className="icon"/>
                            <h3 className="small-text-black">Education</h3>
                            <br></br>
                            <p className="small-text-black more-details">
                                Bachelor of Software Engineering Honours (UG)
                            </p>
                        </div>
                        <div className="details-container-1">
                            <img src={ExperienceImg} alt="Experience icon" className="icon"/>
                            <h3 className="small-text-black">Experience</h3>
                            <br></br>
                            <p className="small-text-black more-details">
                            2+ years of experience (with 6 months of industrial experience) in web development <br />
                            with a strong focus on front-end and back-end
                            technologies.
                            </p>
                        </div>
                        <div className="details-container-1">
                            <p className="small-text-black more-details">
                            I am passionate about coding and problem-solving. I enjoy learning new technologies and continuously 
                            expanding my skill set. My journey in web development has honed my ability to tackle complex challenges, 
                            and I am always eager to take on new projects that push the boundaries of my knowledge.
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


