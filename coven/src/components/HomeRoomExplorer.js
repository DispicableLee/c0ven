import React from "react";
import HomeRoomCard from "./HomeRoomCard";
import { useState, useEffect } from "react";
import '../styles/HomeRoomExplorer.css'

export default function HomeRoomSlide(){
    const myRoomArray = [1,2]
    const [fetchedRooms, setFetchedRooms] = useState([])
    //=========================== initial rooms fetch ==========================
    useEffect(()=>{
        fetch("http://localhost:4002/api/v2/endPoints/search/all/rooms")
          .then((res)=>res.json())
          .then((json)=>{
            setFetchedRooms(json)
          });
        
    },[])
    const myRooms = myRoomArray.map((r)=>{
        return (
            <HomeRoomCard 
            />
        )
    })
    const joinedRooms = fetchedRooms.map((r)=>{
        return (
            <HomeRoomCard 
                name = {r.name}
                image = {r.image}
                admins = {r.admins}
                projects = {r.projects}
                id = {r._id}
            />
        )
    })
    // ======================= return ========================================
    return (

        <div id="explorer-home">
            <h1 id="tit">Rooms</h1>
            <div id="explorer-window">
                <aside>
                    <div className="slide-name">
                        <h1>my rooms</h1>
                        <div id="room-slides">
                            {myRooms}

                        </div>

                    </div>
                </aside> 

                <aside>
                    <div className="slide-name">
                        <h1>Joined Rooms</h1>
                        <div id="room-slides">
                            {joinedRooms}

                        </div>

                    </div>
                </aside>
            </div>
            <h1>Projects</h1>
            <div id="explorer-window">

            </div>


        </div>
    )
}