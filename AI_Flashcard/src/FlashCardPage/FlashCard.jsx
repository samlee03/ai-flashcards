
import "./FlashCard.css"
import { useState } from "react";
import PropTypes from "prop-types";


function FlashCard({term, definition}){
    const [showDefinition, setShowDefinition] = useState(false);

    const handleFlashCardClick = () => {
        setShowDefinition(prevShowDefinition => !prevShowDefinition);
    };


    return(
        <div className = "flash-card-container">
            <div className = {`flash-card ${showDefinition ? "Definition" : ""}`} 
                 onClick = {handleFlashCardClick}>

                <div className = "flash-card-flip">

                    <div className = "Term-Side">
                        <div className = "term"> {term} </div>
                    </div>

                    <div className = "Definition-Side"> 
                        <div className = "definition"> {definition} </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

FlashCard.PropTypes = {
    term: PropTypes.string,
    definition: PropTypes.number
}

FlashCard.defaultProps = {
    term: "Unable to get term",
    definition: "Unable to get definition"
}

export default FlashCard