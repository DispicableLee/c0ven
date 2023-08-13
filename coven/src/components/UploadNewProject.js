import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import FinalUploadPreview from "./FinalUploadPreview"
import "../styles/UploadNewProject.css"


export default function UploadNewProject(){
    const navigate = useNavigate()
    const [finalSubmit, setFinalSubmit] = useState(false)
    const [finalFinal, setFinalFinal] = useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [formName, setFormName] = useState()
    const [formImage, setFormImage] = useState()
    const [formDescription, setFormDescription] = useState()
    const [formLink, setFormLink] = useState()
    const userId = localStorage.id
//================== form submission ===============================


// ======================= image file processing ===========================================
    function onSelectFile(e) {
        // I've kept this example simple by using the first image instead of multiple
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
        const objectUrl = {image: URL.createObjectURL(selectedFile)}
        console.log(objectUrl.image)
        setPreview(objectUrl.image)
        setFormImage(objectUrl.image)
    }
// =========================== handleFormSubmit ========================================
// 
    function handleFormSubmit(){
        console.log(formName)
        console.log(formDescription)
        console.log(formImage)
        console.log(formLink)
        setFinalSubmit(!finalSubmit)
        setFinalFinal(!finalFinal)
    }

    function finalForm(){
        const newObj = {
            name: formName,
            image: formImage,
            userid: userId,
            description: formDescription,
            contributors: [],
            spectators: [],
            messages: [],
            link: formLink
        }
        fetch(`http://localhost:4002/api/v2/endPoints/new/project/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        })
        .then((r)=>r.json())
        .then(navigate("/home"))
    }


// the second final submit button
    const finalSubmitButton = (
            <section 
                className="final-submit"
                onClick={(e)=>setFinalSubmit(!finalSubmit)}
            >
                <h1>Submit</h1>
            </section>
        )


    




// ============================ return ===============================================
    return (
        <div id="container-box" >
            
                <h1>Upload New Project</h1>
            
            <div id="input-fields">
{/* ================================== form inputs ========== */}
                <section className="text-input-field">
                    <h2> What is the name of your project? </h2>
                    <input 
                        type="text" 
                        onChange={(e)=>setFormName(e.target.value)}
                        />
                </section>
                
                <section className="text-input-field">
                    <h2>Provide a description for your project:</h2>
                    <textarea onChange={(e)=>setFormDescription(e.target.value)}/>
                </section>

                <section className="text-input-field">
                    <h2>Does your project have an external link?</h2>
                    <input 
                        type="text" 
                        onChange={(e)=>setFormLink(e.target.value)}
                        />
                </section>
{/* ========================== Image Handling ============================= */}
                <section className="project-image">
                    <h2>Select an image for your project</h2>
                        <label className="file-handle">
                            <input 
                                type="file" 
                                onChange={onSelectFile}
                                />
                        </label>
                </section>
            </div>
{/* ==================== pressing submit button ===============================*/}
                {!(finalSubmit) 
                    ?                 
                    <section 
                        className="submit"
                        onClick={handleFormSubmit}
                    >
                        <h1>Submit</h1>
                    </section>: finalSubmitButton}
{/* ===================== final submission preview =======================*/}

                {finalSubmit?
                    <div>
                    <div id="preview-box">
                        <div className="preview-image-contributors">
                            <img src={preview}/>
                            <aside className="contributors-row">

                            </aside>
                        </div>

                        <section id="preview-description-info">
                            <div>
                                <h2>{formName}</h2>
                                <p>
                                    {formDescription}
                                </p>
                            </div>
                            <div>
                                <h2>{formLink}</h2>
                            </div>
                        </section>
                    </div>      
                    <div id="final-final"
                        onClick={finalForm}
                    >
                        <h1>Confirm Submit</h1>
                    </div>

                    </div>                
                    :
                     <></>
                }

        </div>
    )

}