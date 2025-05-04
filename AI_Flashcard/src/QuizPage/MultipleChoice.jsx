
import "./MultipleChoice.css"

function MultipleChoice(){

    return(
        <div className = "Choice-Container">
            <button className = "Choice-Definition" id = "choice1">Defintion 1</button>
            <button className = "Choice-Definition" id = "choice2">Defintion 2</button>
            <button className = "Choice-Definition" id = "choice3">Defintion 3</button>
            <button className = "Choice-Definition" id = "choice4">Defintion 4</button>
        </div>
    );
}

export default MultipleChoice