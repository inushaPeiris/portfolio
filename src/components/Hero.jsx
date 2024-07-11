import React from "react"
import '../styles.css'
import ProfilePic from '../assets/pro-pic.jpeg';
// import ProfilePicW from '../assets/pro-pic-w.jpg';
import LinkedIn from '../assets/linkedin.png';
import GitHub from '../assets/github.png';
import Medium from '../assets/medium.png';
import Arrow from '../assets/arrow.png';

export default function Hero(){
    return(
        <section id="hero">
            <div className="picture">
                <img src={ProfilePic} alt="my photo" class="my-picture" />
            </div>

            <div className="highlight">
                <h1 className="name">Inusha Peiris</h1>
                <p className="role">Software Engineer</p>
                <div className="hero-btns">
                    <button className="btn btn-1" onClick= {() => window.open('https://drive.google.com/file/d/1t3w02EiPDDv5JNjRu5Z7rQLajSQLxOjt/view?usp=sharing')}>
                    My CV
                    </button>
                    <a href="#contact" className="btn btn-2">
                        Contact Me
                    </a>
                </div>

                <div className="socials">
                    <a href="https://www.linkedin.com/in/inusha-peiris-504391225/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="" className="socials-img" />
                    </a>
                    <a href="https://github.com/inushaPeiris" target="_blank" 
                        rel="noopener noreferrer">
                        <img src={GitHub} alt="" className="socials-img" />
                    </a>
                    <a href="https://medium.com/@inushaumayanthapeiris" target="_blank" 
                        rel="noopener noreferrer">
                        <img src={Medium} alt="" className="socials-img" />
                    </a>
                </div>
            </div>
           
            <img src={Arrow} alt="Arrow icon" className="icon arrow"
                onClick={() => window.location.href='./#about'} />
        </section>
    )
}


