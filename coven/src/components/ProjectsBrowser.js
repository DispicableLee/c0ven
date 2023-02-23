import React from "react";

export default function ProjectsBrowser(){
    //========================== 5 projects row ============================
    const fiveRow = [1,1,1,1,1]
    const fiveRowCards = fiveRow.map((row)=>{
        return (
            <div className="frc-box"
                style={{
                    border: "1px solid #D30C7B",
                    height: '150px',
                    width: '150px',
                }}
            >
                <div className="frc-title"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "11px 6px",
                        height: '20%',
                        backgroundColor: '#D30C7B'
                    }}
                >  
                    <h1>title</h1>
                    <img className="frc-image"
                        src="https://cognota.com/wp-content/uploads/2019/09/blueprint.jpg"
                        style={{
                            width:"100%",
                            height: '100',
                        }}    
                    />
                </div>
            </div>
        )
    })





    return (
        <div className="explore-projects"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px 0px",
                gap: "55px",
                width: "75%",
                height: "400px",
                border: "1px solid #D30C7B"
            }}
            >
                <div className="5projects-row"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "28px 35px",
                        gap: "52px",
                        border: "1px solid #9F9FAD",
                        width: '75%',
                        height: '20%'
                    }}
                >
                    {fiveRowCards}
                </div>

        </div>
    )
}