
import "./Home_Page.css"
import Web_Title from "./Web_Title";

function Home_Page(){


    return(
    <div>
        <Web_Title/>
        
        <button className = "File-Button">Submit A File</button>

        <div className = "Text-Container">
            <textarea className = "Text-Input" placeholder = "Enter a text" rows = "25"/>
        </div>

        <button className = "Enter-Button">Enter</button>
    </div>
    );
}


export default Home_Page;