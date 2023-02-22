import React from "react";
import HomeRoomCard from "./HomeRoomCard";
import { useState, useEffect } from "react";

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
    console.log(fetchedRooms)
    const myRooms = myRoomArray.map((r)=>{
        return (
            <HomeRoomCard 
            />
        )
    })
    const homeRoomDisplay = fetchedRooms.map((r)=>{
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
    return (

        <div style={{
            width: '1000px'
        }}>
            {localStorage.id ? 
            <aside style={{
                float: 'left',
                display: 'flex',
                width: '50%'
                
            }}>
            {myRooms}

            </aside> : <></>}

            <aside style={{
                float: 'right',
                display: 'block',
                width: '40%',
                height: '50%',
                overflow: 'auto'
            }}>
                {homeRoomDisplay}
            </aside>
        </div>
    )
}