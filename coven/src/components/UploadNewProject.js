import React from "react"
import { useState, useEffect } from "react"
import FinalUploadPreview from "./FinalUploadPreview"
import "../components/UploadNewProject.css"


export default function UploadNewProject(){
    const [finalSubmit, setFinalSubmit] = useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [formName, setFormName] = useState()
    const [formImage, setFormImage] = useState()
    const [formDescription, setFormDescription] = useState()
    const [formLink, setFormLink] = useState()

    // create a preview as a side effect, whenever selected file is changed
    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview(undefined)
    //         return
    //     }
    //     const objectUrl = URL.createObjectURL(selectedFile)
    //     console.log(objectUrl)
    //     setPreview(objectUrl)
    //     setFormImage(preview)

    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl)

    // }, [selectedFile])
// ======================= image file processing ===========================================
    function onSelectFile(e) {
        // I've kept this example simple by using the first image instead of multiple
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
        const objectUrl = {image: URL.createObjectURL(selectedFile)}
        console.log(objectUrl)
        setFormImage(objectUrl)
    }
// =========================== handleFormSubmit ========================================
// 
    function handleFormSubmit(){
        console.log(formName)
        console.log(formDescription)
        console.log(formImage)
        console.log(formLink)
        setFinalSubmit(!finalSubmit)
    }



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
            <div className="title">
                <h1 className="heading-one">
                    Upload New Project
                </h1>
            </div>
            <div id="input-fields">

                <section>
                    <h2
                        className="heading-two"
                    >
                    What is the name of your project?</h2>
                    <input 
                        type="text" 
                        id="project-name-input"
                        onChange={(e)=>setFormName(e.target.value)}
                        />
                </section>
                
                <section>
                    <h2
                    className="heading-two"
                    >
                        provide a description for your project:</h2>
                    <textarea 
                        id="project-description-input"
                        onChange={(e)=>setFormDescription(e.target.value)}
                        />

                </section>

                <section className="website-link">
                    <h2>does your project have an external link?</h2>
                    <input 
                        type="text" 
                        id="project-link"
                        onChange={(e)=>setFormLink(e.target.value)}
                        />
                </section>
{/* ========================== Image Handling ============================= */}
                <section className="project-image">
                    <h2
                        className="heading-two"
                    >select an image for your project</h2>
                    <div id="image-handler">
                        <label className="file-handle">
                            <input 
                                type="file" 
                                onChange={onSelectFile}
                                />
                        </label>
                    </div>
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
                <div id="preview-box">
                    <h3>hi</h3>

                </div>


        </div>
    )

}