import React from "react";
import "./App.css";

const Timer = ({timer}) => {
    
    return (
    <div className="timer">{ timer.minutes }:{ timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds} </div>
    )
}

export default Timer;