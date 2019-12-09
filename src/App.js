//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Home from "./home";
import Away from "./away";
import HomeButtons from "./homeButtons";
import AwayButtons from "./awayButtons";
import Timer from "./timer";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, lionsSetScore] = useState(0);
  const [tigersScore, tigersSetScore] = useState(0);
  const [quarter, setQuarter] = useState(0);

  const lionTd = () => {
    lionsSetScore(lionsScore + 7);
  }
  const lionFg =() => {
    lionsSetScore(lionsScore + 3);
  }

  const tigerTd = () => {
    tigersSetScore(tigersScore + 7);
  }
  const tigerFg = () => {
    tigersSetScore(tigersScore + 3);
  }

  const quarterChange = () => {
    setQuarter(quarter + 1)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Home score={lionsScore} />
          <HomeButtons td={lionTd} fg={lionFg} />
          <Timer />
          <AwayButtons td={tigerTd} fg={tigerFg} />
          <Away score={tigersScore} />
        </div>
        <BottomRow quarter={quarter} />
      </section>
    </div>
  );
}

export default App;

