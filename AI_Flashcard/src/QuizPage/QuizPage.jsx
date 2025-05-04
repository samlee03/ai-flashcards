import "./QuizPage.css";
import MultipleChoice from "./MultipleChoice";
import Web_Title from "../HomePage/Web_Title";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function QuizPage() {
    const location = useLocation();
    const originalData = location.state?.data || [];

    const [remainingData, setRemainingData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    useEffect(() => {
        const reset = [...originalData];
        setRemainingData(reset);
        const firstQuestion = getNextQuestion(reset);
        setCurrentQuestion(firstQuestion);
    }, [originalData]);

    function shuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function getNextQuestion(dataSet) {
        if (dataSet.length === 0) return null;
    
        const index = Math.floor(Math.random() * dataSet.length);
        const selected = dataSet[index];
        const newDataSet = dataSet.filter((_, i) => i !== index);
        setRemainingData(newDataSet);
    
        const incorrectDefs = shuffle(
            originalData
                .filter(d => d.definition !== selected.definition) // exclude the correct one
                .map(d => d.definition)
        ).slice(0, 3);
    
        const options = shuffle([selected.definition, ...incorrectDefs]);
    
        return {
            term: selected.term,
            options,
            correctAnswer: selected.definition
        };
    }

    function handleNextQuestion() {
        const next = getNextQuestion(remainingData);
        setCurrentQuestion(next);
    }

    function handleRetry() {
        const reset = [...originalData];
        setRemainingData(reset);
        const newQuestion = getNextQuestion(reset);
        setCurrentQuestion(newQuestion);
    }

    return (
        <div>
            <Web_Title />
            <div className="Quiz-Page-Container">
                <div className="Quiz-Term">{currentQuestion?.term || "No term available"}</div>
                <div className="Multiple-Choice-Container">
                    {currentQuestion && (
                        <MultipleChoice data={currentQuestion} onNext={handleNextQuestion} />
                    )}
                </div>
            </div>

            <div className="Quiz-Buttons">
                <Link
                    to="/flashcard"
                    state={{ data: originalData }}
                    className="Return-Button"
                >
                    Return
                </Link>
                <button className="Retry-Button" onClick={handleRetry}>
                    Retry
                </button>
            </div>
        </div>
    );
}

export default QuizPage;
