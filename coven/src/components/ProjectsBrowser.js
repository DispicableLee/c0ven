import React from "react";
import { useState, useEffect } from "react";
import "../styles/ProjectsBrowser.css";

export default function ProjectsBrowser({ fetchedProjects }) {
  //===== when clicking on each 5-row-card, its info will be rendered into showcase-window ======
  const [showcaseTitle, setShowcaseTitle] = useState("")
  const [showcaseImage, setShowcaseImage] = useState("")
  const [showcaseDescription, setShowcaseDescription] = useState("")
  const [showcaseLink, setShowcaseLink] = useState("")
  const [projectOverall, setProjectOverall] = useState([])
  const [contRow, setContRow] = useState([])

  function handleWindowChange(card){
    setShowcaseTitle(card.name)
    setShowcaseImage(card.image)
    fetch(`http://localhost:4002/api/v2/endPoints/search/project/${card._id}`)
    .then((r)=>r.json())
    .then((json)=>{
      console.log(json)
      setShowcaseDescription(json.description)
      setShowcaseLink(json.link)
      // setProjectOverall(json[0])
      // setContRow(json[1])
    })
  }
  //========================== 5 projects row ============================
  const fiveRowCards = fetchedProjects.map((card) => {
    return (
      <div className="frc-box"
        onClick={()=>handleWindowChange(card)}
      >
        <div className="frc-title">
          <h3>{card.name}</h3>
        </div>
        <img
          className="frc-image"
          src={card.image}
        />
      </div>
    );
  });
  //========================= contributing-project-list =====================
  // const contributorsList = contRow.map((r) => {
  //   return (
  //     <div
  //       className="c-list-item"
  //       style={{
  //         display: "flex",
  //         borderBottom: "1px solid white",
  //         height: "75px",
  //         paddingLeft: "10px",
  //         marginTop: "10px",
  //         marginBottom: "5px",
  //         color: "#D30C7B",
  //       }}
  //     >
  //       <div
  //         style={{
  //           backgroundColor: "pink",
  //           height: "20px",
  //         }}
  //       ></div>
  //       <img src="" />
  //       <h1>{r.username}</h1>
  //     </div>
  //   );
  // });

  return (
    <div className="explore-projects">
      <div className="five-projects-row">{fiveRowCards}</div>
      {/* ========================== project showcase ======================================== */}
      {/* ========================== make own component? ===================================== */}
      <div className="showcase-window">
        <div className="showcase-instant-info">
          <img src={showcaseImage}/>
          <aside>
            <h3>contributors</h3>
            {/* {contributorsList} */}
          </aside>
        </div>
        <div className="lower-half">
          <div id="title-description">
            <h1>{showcaseTitle}</h1>
            <p>{showcaseDescription}</p>

          </div>
          {/* <a href={contRow.}/> */}
        </div>
      </div>
    </div>
  );
}
