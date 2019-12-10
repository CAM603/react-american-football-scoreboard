import React from "react";
import "./App.css";


const HomeButtons = (props) => {
    return (
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button onClick={() => props.td()} className="homeButtons__touchdown">Home Touchdown</button>
            <button onClick={() => props.fg()}   className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
    )
}

export default HomeButtons;