
import "./FlashCardPage.css"
import Web_Title from "../HomePage/Web_Title"
import FlashCard from "./FlashCard.jsx"
import KeyTerm from "./KeyTerm.jsx"
import { Link } from "react-router-dom"

function FlashCardPage(){
    return(
        <div>
            <Web_Title/>
            <FlashCard/>

            <div className = "arrow-container">
                <button className = "left-arrow"/>
                <button className = "right-arrow"/>
            </div>

            <Link to={"/"} className = "new-flashcard-button">Create New Flashcards</Link>

            <div className = "Key-Term-Container">
                <KeyTerm></KeyTerm>
            </div>
        </div>
    );
}

export default FlashCardPage