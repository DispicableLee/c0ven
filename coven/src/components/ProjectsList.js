import React from "react";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsBrowser from "./ProjectsBrowser";
import "./ProjectsList.css";

export default function ProjectsList() {
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
        className="cproject-card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          margin: "10px",
          height: "300px",
          width: "300px",
          border: "1px solid #93D24B",
          color: '#93D24B'
        }}
        onClick={()=>{console.log(c._id)}}
      >
        <h2>{c.name}</h2>
      </div>
    );
  });
  //===================spectating projects w/mapping ==================
  const psArray = [1, 1, 1];
  const renderedSpectatingProjects = psArray.map((p) => {
    return (
      <div
        className="cproject-card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          margin: "10px",
          height: "300px",
          width: "300px",
          border: "1px solid #93D24B",
        }}
      ></div>
    );
  });

  return (
    <div className="projects-list-box">

      <div className="cont-spec"
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '100px'
        }}
      >
        <div className="cont-spec-projects">

          {renderedContributingProjects}
        </div>
        <div className="cont-spec-projects">
            {renderedSpectatingProjects}
        </div>
      </div>
      <ProjectsBrowser fetchedProjects={fetchedProjects}/>
    </div>
  );
}
