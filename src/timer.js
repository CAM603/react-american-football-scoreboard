import React from "react";
import "./App.css";

const Timer = (props) => {
    console.log(props)
    return (
        <div className="timer">{props.time}</div>
    )
}

export default Timer;