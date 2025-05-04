
import "./QuizPage.css"
import MultipleChoice from "./MultipleChoice";
import Web_Title from "../HomePage/Web_Title";
import { Link, useLocation } from "react-router-dom";

function QuizPage({data}){
    const location = useLocation();
    // const data = location.state?.data || [];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function getNextQuestion() {
        if (data.length === 0) return null;
        const index = Math.floor(Math.random() * data.length);
        const selected = data.splice(index, 1)[0];
        const incorrectDefs = shuffle(data.map(d => d.definition)).slice(0, 3);
        const options = shuffle([selected.definition, ...incorrectDefs]);
        return {
            term: selected.term,
            options,
            correctAnswer: selected.definition
        };
    }
    
    function resetData() {
        data = [...originalData]; 
    }
    return(
        <div>
            <Web_Title/>
            <div className = "Quiz-Page-Container">
                <div className = "Quiz-Term">Some Term</div>
                <div className = "Multiple-Choice-Container">
                    <MultipleChoice data = {data}/>
                </div>
            </div>

            <div className = "Quiz-Buttons">
                <Link to="/flashcard" className = "Return-Button">Return</Link>
                <button className = "Retry-Button">Retry</button>
            </div>
        </div>
    );

}

export default QuizPage