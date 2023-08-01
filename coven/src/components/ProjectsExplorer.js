import React from "react";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsBrowser from "./ProjectsBrowser";
import "../styles/ProjectsExplorer.css";

export default function ProjectsExplorer() {
  const callId = localStorage.id
    useEffect(()=>{
    //================= 5-project-browser-card fetch ===================
    fetch("http://localhost:4002/api/v2/endPoints/search/all/projects")
    .then((r)=>r.json())
    .then((json)=>{
      setFetchedProjects(json)
    })
  },[])
  const [fetchedProjects, setFetchedProjects] = useState([])
  console.log(fetchedProjects)

  //=============== contributor array w/filtering and mapping =============================
  const cArra = fetchedProjects.filter((p)=>p.userid=callId)
  const renderedContributingProjects = cArra.map((c) => {
    return (
      <div
        className="project-slide-card"
        onClick={()=>{console.log(c._id)}}
      >
        <h3>{c.name}</h3>
      </div>
    );
  });
  //===================spectating projects w/mapping ==================
  const psArray = [1, 1, 1];
  const renderedSpectatingProjects = psArray.map((p) => {
    return (
      <div className="project-slide-card">

      </div>
    );
  });
// ====================== return =================================
  return (
    <div id="projects-list-box">
      <div className="cont-spec">
        <div className="cont-spec-projects">
          <h2>My Projects</h2>
          {renderedContributingProjects}
        </div>
        <div className="cont-spec-projects">
          <h2>Projects I'm contributing to</h2>
            {renderedSpectatingProjects}
        </div>
      </div>
      <h2 id="upload-new">Upload New Project</h2>
      <ProjectsBrowser fetchedProjects={fetchedProjects}/>
    </div>
  );
}
