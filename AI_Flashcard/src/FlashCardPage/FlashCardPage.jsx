
import "./FlashCardPage.css"
import Web_Title from "../HomePage/Web_Title"
import FlashCard from "./FlashCard.jsx"
import KeyTerm from "./KeyTerm.jsx"
import { Link, useLocation } from "react-router-dom"

function FlashCardPage(){
    const location = useLocation();
    const data = location.state?.data

    console.log(data); //[ {term: 'Iron Man', definition: '..'}, {term: 'Spider-Man', definition: 'Peter Parke..'}


    return(
        <div>
            <Web_Title/>
            <FlashCard/>

            <div className = "arrow-container">
                <button className = "left-arrow"/>
                <button className = "right-arrow"/>
            </div>

            <div className = "link-container">
                <Link to={"/"} className = "new-flashcard-button">Create New Flashcards</Link>
            </div>

            <div className = "Key-Term-Container">
                <KeyTerm></KeyTerm>
            </div>
        </div>
    );
}

export default FlashCardPage