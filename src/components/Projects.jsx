import React from "react"
import '../styles.css'
import Arrow from '../assets/arrow.png';
import MyProjects from './myProjects/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){

    const projects = MyProjects.map(item => {
        return(
            <ProjectCard key = {item.id} item ={item}/>
        )
    })

    return(
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="text">Projects</h1>
            
            <div className="projects-container">
                {projects}
            </div>
            
            <div className="git-projects">
                <a href="https://github.com/inushaPeiris?tab=repositories">
                    View all projects
                </a>
            </div>

            <img src={Arrow} alt="Arrow icon" className="icon arrow"
                onClick={() => window.location.href='./#contact'} />
        </section>
    )
}


