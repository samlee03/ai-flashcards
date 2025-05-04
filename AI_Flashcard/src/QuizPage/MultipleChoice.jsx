import React, { useState, useEffect } from "react";
import "./MultipleChoice.css";

function MultipleChoice({ data, onNext }) {
    const { options, correctAnswer } = data;

    const [selected, setSelected] = useState(null);
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        setSelected(null);
        setAnswered(false);
    }, [data]);

    function handleClick(option) {
        if (answered) return;
        setSelected(option);
        setAnswered(true);
    }

    useEffect(() => {
        if (answered) {
            const timer = setTimeout(() => {
                if (onNext) onNext();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [answered, onNext]);

    return (
        <div className="Choice-Container">
            {options.map((option, index) => {
                let className = "Choice-Definition";

                if (answered && option === selected) {
                    className += option === correctAnswer ? " correct" : " incorrect";
                }

                return (
                    <button
                        key={index}
                        id={`choice${index + 1}`}
                        className={className}
                        onClick={() => handleClick(option)}
                        disabled={answered}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
}

export default MultipleChoice;
