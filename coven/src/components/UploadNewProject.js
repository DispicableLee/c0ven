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
            <div className="title animate-enter">
                <h1>Upload New Project</h1>
            </div>
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
                    <h2>provide a description for your project:</h2>
                    <textarea onChange={(e)=>setFormDescription(e.target.value)}/>
                </section>

                <section className="text-input-field">
                    <h2>does your project have an external link?</h2>
                    <input 
                        type="text" 
                        onChange={(e)=>setFormLink(e.target.value)}
                        />
                </section>
{/* ========================== Image Handling ============================= */}
                <section className="project-image">
                    <h2>select an image for your project</h2>
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
                    <div id="preview-box">
                        <div className="preview-image-contributors">
                            <img src={preview}/>
                            <aside className="contributors-row">

                            </aside>
                        </div>

                        <section id="preview-description-info">
                            <div>
                                <h2>title</h2>
                                <p>
                                    Non aliqua cillum qui laborum eiusmod eu. 
                                    Cillum minim nulla cupidatat reprehenderit laborum sit fugiat culpa ut et est dolore. 
                                    Elit fugiat ullamco commodo laboris cupidatat magna irure id. 
                                    Do eu consectetur id ut sint.
                                    Aute labore aute pariatur reprehenderit et laborum ut proident laboris adipisicing officia ut voluptate commodo. 
                                    Eiusmod reprehenderit ea reprehenderit ea sit cupidatat sit voluptate eiusmod ex dolor non elit.
                                </p>
                            </div>
                            <div>
                                <h2>link</h2>
                            </div>
                        </section>
                    </div>      
                    :
                     <></>
                }
        </div>
    )

}