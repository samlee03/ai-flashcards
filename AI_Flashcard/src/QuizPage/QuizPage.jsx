
import "./QuizPage.css"
import MultipleChoice from "./MultipleChoice";
import Web_Title from "../HomePage/Web_Title"


function QuizPage({data}){

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
                <button className = "Return-Button">Return</button>
                <button className = "Retry-Button">Retry</button>
            </div>
        </div>
    );

}

export default QuizPage