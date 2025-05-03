
import "./FlashCard.css"
import { useState } from "react";


function FlashCard(){
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
                        <div className = "term">Some Term</div>
                    </div>

                    <div className = "Definition-Side"> 
                        <div className = "definition">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus harum mollitia, quo est fugit incidunt atque, cupiditate qui nisi quia itaque nulla asperiores architecto hic commodi! Rem ullam totam officiis?</div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default FlashCard