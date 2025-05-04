
import "./KeyTerm.css"
import PropTypes from "prop-types"

function KeyTerm({term, definition}){

    return(
        <div className = "KeyTerm">
                <div className = "Term-Table">{term}</div>
                <div className = "Definition-Table">{definition}</div>
        </div>
    )
}

KeyTerm.PropTypes = {
    term: PropTypes.string,
    definition: PropTypes.number
}

KeyTerm.defaultProps = {
    term: "Unable to get term",
    definition: "Unable to get definition"
}

export default KeyTerm