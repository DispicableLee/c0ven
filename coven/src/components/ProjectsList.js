import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsBrowser from "./ProjectsBrowser";

export default function ProjectsList(){
    const pArra=[1,1,2]
    return (
        <div className="projects-list-box"
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: '30px'
            }}    
        >
            <div className="contributing-projects">


            </div>
            <div className="spectating-projects">

            </div>

            <ProjectsBrowser/>
        </div>
    )
}