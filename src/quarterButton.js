import React from "react";
import "./App.css";

const QuarterButton = (props) => {
    
    return (
        <div>
            <button onClick={() => props.quarterChange()} >Change Quarter</button>
        </div>
    )
}

export default QuarterButton;