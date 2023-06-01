import React from "react"
import "./portfolio.css"
import Horizon from "./Picture/horiseon.jpeg"
import Wellness from "./Picture/wellness.png"
import Ideation from "./Picture/Ideation.png"
import Projects from "../sub/project"

const Portfolio =()=> {
    return(
        <div className="inline-flex">

            <div>
            <a href="https://aeffoua.github.io/horiseon-code-refactor/" target="_blank"><Projects projectName={"  Horizon"} picture={Horizon}/> </a>
            <br/>
            <a href="https://github.com/aeffoua/horiseon-code-refactor.git" target="blank">Horiseon</a>
            
            </div>
           
           
           <div>
           <a href="https://dellmiles24.github.io/Wellness-Checkup/" target="_blank"><Projects projectName={"  wellness"} picture={Wellness}/></a>
           <br/>
           <a href="https://github.com/aeffoua/the-wellness-checkup.git" target="blank">wellness</a>
           </div>
           
           
           <div>
           <a href="https://ideation-app-generator.herokuapp.com/" target="blank"><Projects projectName={"  Ideation"} picture={Ideation}/> </a>
           <br/>
           <a href="https://github.com/alc0ve/automatic-fortnight-debuggers" target="blank">Ideation</a>
           </div>
           
        </div>
    
    )
}
export default Portfolio