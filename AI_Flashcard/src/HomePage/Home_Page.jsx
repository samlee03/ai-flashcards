import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home_Page.css"
import Web_Title from "./Web_Title";
import LoadingGif from "../assets/loading-circle.gif"

function Home_Page(){
    const [isFetching, setIsFetching] = useState(false);
    const [userInput, setUserInput] = useState("")
    const navigate = useNavigate();
    const handleSubmitFile = async (selectedFile) => {
        setIsFetching(true);
        const formData = new FormData();
        formData.append("file", selectedFile);
        try {
            const response = await fetch('https://ai-flashcards-backend.onrender.com/api/generate-by-file', {
              method: "POST",
              body: formData
            });
            if (response.ok) {
                const data = await response.json();
                navigate('/flashcard', { state: { data: data } });
                console.log(data);
              } else {
                console.error("Upload failed");
              }
        } catch (error) {
            console.error("Error ", error)
        }
    };
    const handleSubmitText = async () => {
        setIsFetching(true)
        const response = await fetch('https://ai-flashcards-backend.onrender.com/api/generate-by-topic', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ topic: userInput })
        })
        const data = await response.json();
        navigate('/flashcard', { state: { data: data } });
        console.log(data);
    }
    return( 
    <div className='home-page'>
        <Web_Title/>
        { !isFetching ? 
            <>
                {/* <button className = "File-Button">Submit A File</button> */}
                <label htmlFor="file-upload" className="File-Button">
                    Upload Existing File
                </label>
                <input id="file-upload" type="file" style={{ display: 'none' }} onChange={e => {
                    const selectedFile = e.target.files[0];
                    handleSubmitFile(selectedFile);
                }} />
                
                <div className='or-separator'> OR</div>

                <div className = "Text-Container">
                    <textarea className = "Text-Input" placeholder = "Generate an idea.. (i.e. Chinese 101 Words)" rows = "4" value={userInput} onChange={e => setUserInput(e.target.value)}  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmitText();
                    }
                    }}/>
                </div>

                {/* <button className = "Enter-Button" onClick={handleSubmitText}>Enter</button> */}
            </>
        :   <>
                    <div className='fetching-content'>

                        <h1>
                            Generating Content
                        </h1>
                        <img className='loading-circle' src={LoadingGif}></img>
                    </div>
            </>
        }
    </div>
    );
}


export default Home_Page;