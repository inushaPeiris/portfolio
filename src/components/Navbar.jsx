import React from "react"
import '../styles.css'

export default function Navbar(){
    return(
        <nav id="navbar">
            <div class="name">Inusha Peiris</div>
            <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}
