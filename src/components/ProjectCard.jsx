import React from "react"
import '../styles.css'

export default function SkillCard(props){
    return(
        <div className="details-container color-container">
            <div className="article-container">
                <img src={props.item.img} alt="Project Image" className="project-img"/>
            </div>
            <h2 className="experience-sub-title project-title">{props.item.name}</h2>
            <div className="btn-container">
                <button
                className="btn btn-color-2 project-btn"
                onClick= {() => window.open(props.item.github)}>
                    GitHub
                </button>
                <button
                className="btn btn-color-2 project-btn"
                onClick= {() => window.open(props.item.demo)}>
                    Live Demo
                </button>
            </div>
        </div>
    )
}