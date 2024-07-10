import React from "react"
import '../styles.css'
import Arrow from '../assets/arrow.png';
import SkillCard from './SkillCard'
import {frontendSkills, backendSkills, languageSkill, toolsAndTech, operatingSystems} from "./mySkills/skills"

export default function Skills(){

    const frontend = frontendSkills.map(item => {
        return (
          <SkillCard 
            key = {item.id}
            item = {item} 
          />
        )
    })

    const backend = backendSkills.map(item => {
        return (
          <SkillCard 
            key = {item.id}
            item = {item} 
          />
        )
    })

    const languages = languageSkill.map(item => {
        return (
          <SkillCard 
            key = {item.id}
            item = {item} 
          />
        )
    })

    const tools = toolsAndTech.map(item => {
        return (
          <SkillCard 
            key = {item.id}
            item = {item} 
          />
        )
    })

    const os = operatingSystems.map(item => {
        return (
          <SkillCard 
            key = {item.id}
            item = {item} 
          />
        )
    })

    return(
        <section id="skills"> 
            <p class="section__text__p1">My Web Development</p>
            <h1 class="text">Skills</h1>
            <div class="experience-details-container">
                <div class="skill-containers">
                    <div class="skill-details">
                        <h2 class="experience-sub-title">Frontend Development</h2>
                        <div class="article-container">
                            {frontend}
                        </div>
                    </div>
                    <div class="skill-details">
                        <h2 class="experience-sub-title">Backend Development</h2>
                        <div class="article-container">
                            {backend}
                        </div>
                    </div>
                    <div class="skill-details">
                        <h2 class="experience-sub-title">Programming Languages</h2>
                        <div class="article-container">
                            {languages}
                        </div>
                    </div>
                    <div class="skill-details">
                        <h2 class="experience-sub-title">Tools & Technologies</h2>
                        <div class="article-container">
                            {tools}
                        </div>
                    </div>
                    <div class="skill-details">
                        <h2 class="experience-sub-title">Operating Systems</h2>
                        <div class="article-container">
                            {os}
                        </div>
                    </div>
                </div>
            </div>
            <img src={Arrow} alt="Arrow icon" className="icon arrow"
                onClick={() => window.location.href='./#projects'} />
        </section>
    )
}


