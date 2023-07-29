import React from "react";
import { useState } from "react";
import SignUpInDialog from "./SignUpInDialog";
import "../styles/SplashPage.css"

export default function SplashPage(){
    const [dialog,setDialog] = useState(false)
    

    return (
        <div id="splash">
            <div>
                <h1>Welcome</h1>
            </div>
            <section className="sign-up-in"
                onClick={(e)=>setDialog(!dialog)}
            >
                <h2>Sign In</h2>
            </section>
            <section className="sign-up-in">
                <h2>Sign Up</h2>
            </section>
            {dialog ? 
                <SignUpInDialog/>
            :<></>} 
      </div>
          
    )
}