import React from "react";
import { useState, useEffect } from "react";
import "../styles/Profile.css"

export default function ProfileMain(){
    const mockTiles = [1,2,3,4]
    const userId = localStorage.id
    useEffect(()=>{
        fetch(`http://localhost:4002/api/v2/endPoints/search/user/${userId}`)
        .then((r)=>r.json())
        .then((json)=>console.log(json))
    }, [])

    return (
        <div id="profile-main">
{/* ============================================================= */}
            <section id="prof-header">
                <div className="nav-container">
                    <img/>
                    <h3>user name</h3>
                </div>
                <div className="nav-container">
                    <div className="nav-container-buttons">
                        <h3>Projects</h3>        
                    </div>
                    <div className="nav-container-buttons">
                        <h3>Rooms</h3>
                    </div>
                </div>
            </section>
{/* ============================================================= */}
            <section id="prof-view-look">
                <div id="prof-view-window">
                    <div id="pvw-1">

                    </div>
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}