import React from "react";
import HomeRoomCard from "./HomeRoomCard";
import { useState, useEffect } from "react";

export default function HomeRoomSlide(){
    const roomArray = [1,2,3,4]
    const myRoomArray = [1,2]
    const [homeRooms, setHomeRooms] = useState([])

    //api call to rooms database
    // useEffect(()=>{
    //     fetch("http://localhost:4002/api/v2/endPoints/search/all/rooms")
    //     .then((r)=>r.json())
    //     .then((json)=>{
    //         console.log(json)
    //         setHomeRooms(json)
    //         console.log(homeRooms)
    //     })
    // },[])
    const homeRoomDisplay = roomArray.map((r)=>{
        return (
            <HomeRoomCard/>

        )
    })
    const myRooms = myRoomArray.map((r)=>{
        return (
            <HomeRoomCard/>
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