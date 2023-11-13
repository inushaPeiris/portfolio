import React from "react"
import '../styles.css'
import Check from '../assets/check.png';

export default function SkillCard(props){
    return(
        <article >
            <img src={Check} alt="Experience icon" class="icon"/>
            <div>
                <h3 class="small-text">{props.item.subject}</h3>
                <p class="small-text">{props.item.level}</p>
            </div>  
        </article> 
    )
}