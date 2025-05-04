
import "./FlashCardPage.css"
import Web_Title from "../HomePage/Web_Title"
import FlashCard from "./FlashCard.jsx"
import KeyTerm from "./KeyTerm.jsx"
import { Link, useLocation } from "react-router-dom"

import {useState, useEffect} from "react"

function FlashCardPage(){
    const location = useLocation();
    const data = location.state?.data

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
                <Link to={"/"} className = "navigation-button">Create New Flashcards</Link>
                <Link to={"/quizpage"} className = "navigation-button" state = {{data}}>Test Yourself</Link>
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