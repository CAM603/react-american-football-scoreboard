import React from "react";
import "./App.css";

const AwayButtons = (props) => {
    return (
        <div className="awayButtons">
            <button onClick={() => props.td()} className="awayButtons__touchdown">Away Touchdown</button>
            <button onClick={() => props.fg()} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
    )
}

export default AwayButtons;