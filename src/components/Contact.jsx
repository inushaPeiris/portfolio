import React from "react"
import '../styles.css'
import EmailImg from '../assets/email.png';
import LinkedinImg from '../assets/linkedin.png';

export default function Contact(){

    return(
        <section id="contact"> 
            <p class="section__text__p1">Get in Touch</p>
            <h1 class="text">Contact Me</h1>
            <div class="contact-info-upper-container">
                <div class="contact-info-container">
                    <img src={EmailImg} alt="Email icon" 
                    class="icon contact-icon email-icon"/>
                    <p>
                        <a href="inushaumayanthapeiris@gmail.com">inushaumayanthapeiris@gmail.com</a>
                    </p>
                </div>
                <div class="contact-info-container">
                    <img src={LinkedinImg} alt="LinkedIn icon"
                    class="icon contact-icon"/>
                    <p>
                        <a href="https://www.linkedin.com/in/inusha-peiris-504391225/">LinkedIn</a>
                    </p>
                </div>
            </div>
            {/* <img src={Arrow} alt="Arrow icon" className="icon arrow"
                onClick={() => window.location.href='./#projects'} /> */}
        </section>
    )
}


