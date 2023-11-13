import React from "react"
import '../styles.css'

export default function Footer(){
    return(
        <section id="skills"> 
            <footer>
                <nav>
                    <div class="nav-links-container">
                        <ul class="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <p>Copyright &#169; 2023 Inusha Peiris. All Rights Reserved.</p>
            </footer>
            
            {/* <img src={Arrow} alt="Arrow icon" className="icon arrow"
                onClick={() => window.location.href='./#projects'} /> */}
        </section>
    )
}