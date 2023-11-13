import React from "react"
import '../styles.css'
import Arrow from '../assets/arrow.png';
import FrontEndSkills from './mySkills/frontEndSkills'
import BackEndSkills from './mySkills/backEndSkills'
import SkillCard from './SkillCard'

export default function Skills(){

    const skills1 = FrontEndSkills.map(item => {
        return (
          <SkillCard 
            key = {item.id}
            item = {item} 
          />
        )
    })

    const skills2 = BackEndSkills.map(item => {
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
                <div class="about-containers">
                    <div class="details-container-1">
                        <h2 class="experience-sub-title">Frontend Development</h2>
                        <div class="article-container">
                            {skills1}
                        </div>
                    </div>
                    <div class="details-container-1">
                        <h2 class="experience-sub-title">Backend Development</h2>
                        <div class="article-container">
                            {skills2}
                        </div>
                    </div>
                </div>
            </div>
            <img src={Arrow} alt="Arrow icon" className="icon arrow"
                onClick={() => window.location.href='./#projects'} />
        </section>
    )
}


