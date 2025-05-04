
import "./FlashCardPage.css"
import Web_Title from "../HomePage/Web_Title"
import FlashCard from "./FlashCard.jsx"
import KeyTerm from "./KeyTerm.jsx"
import { Link, useLocation } from "react-router-dom"

import {useState} from "react"

function FlashCardPage(){
    const location = useLocation();
    const data = location.state?.data
    // const data = [
    //     {
    //         "term": "Iron Man",
    //         "definition": "A genius inventor who uses his armored suits for heroic deeds."
    //     },
    //     {
    //         "term": "Captain America",
    //         "definition": "A super soldier and symbol of freedom from World War II."
    //     },
    //     {
    //         "term": "Thor",
    //         "definition": "The Asgardian god of thunder and protector of Earth."
    //     },
    //     {
    //         "term": "Hulk",
    //         "definition": "A scientist transformed into a powerful, rage-fueled monster."
    //     },
    //     {
    //         "term": "Spider-Man",
    //         "definition": "A teenager granted spider-like abilities after being bitten by a radioactive spider."
    //     },
    //     {
    //         "term": "Black Widow",
    //         "definition": "A highly trained spy and assassin with no superpowers."
    //     },
    //     {
    //         "term": "Wakanda",
    //         "definition": "A technologically advanced African nation hidden from the world."
    //     }
    // ];


    const [currIdx, setCurrIdx] = useState(0);

    const decrementIndex = () => {
        setCurrIdx((currIdx === 0) ? 0 : currIdx - 1);
    };

    const incrementIndex = () => {
        setCurrIdx((currIdx === data.length - 1) ? data.length - 1 : currIdx + 1);
    };

    console.log(data); //[ {term: 'Iron Man', definition: '..'}, {term: 'Spider-Man', definition: 'Peter Parke..'}


    return(
        <div>
            <Web_Title/>
            <FlashCard term = {data[currIdx].term} definition = {data[currIdx].definition}/>

            <div className = "arrow-container">
                <button className = "left-arrow" onClick = {decrementIndex}/>
                <button className = "right-arrow" onClick = {incrementIndex}/>
            </div>

            <div className = "link-container">
                <Link to={"/"} className = "new-flashcard-button">Create New Flashcards</Link>
                <button className = "quiz-button">Test YourSelf</button>
            </div>

            <div className = "Key-Term-Container">
                {data.map((item, idx) => (
                    <KeyTerm term = {item.term} definition = {item.definition} key = {idx}/>
                ))}
            </div>
        </div>
    );
}

export default FlashCardPage