//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
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
  const [down, setDown] = useState(1);
  const [timer, setTimer] = useState({minutes: 10, seconds: 0})
  
  useEffect(() => {
    const time = setInterval(() => {
      if (timer.seconds > 0) {
        
        setTimer(({seconds}) => ({
          seconds : seconds - 1,
          minutes :  timer.minutes
        }))
      }
      if (timer.seconds === 0) {
        if (timer.minutes === 0) {
          clearInterval(time)
        } else {
          setTimer(({minutes}) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
          
        }
      }
    }, 1000);
    
    return () => clearInterval(time);
  });

  const lionTd = () => {
    lionsSetScore(lionsScore + 6);
  }
  const lionFg =() => {
    lionsSetScore(lionsScore + 3);
  }

  const tigerTd = () => {
    tigersSetScore(tigersScore + 6);
  }
  const tigerFg = () => {
    tigersSetScore(tigersScore + 3);
  }

  const quarterChange = () => {
    quarter < 4 ? setQuarter(quarter + 1)
    : setQuarter(0)
  }
  const changeDown = () => {
    down < 4 ? setDown(down + 1)
    : setDown(1)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Home score={lionsScore} />
          <HomeButtons td={lionTd} fg={lionFg} />
          <Timer timer={timer} />
          <AwayButtons td={tigerTd} fg={tigerFg} />
          <Away score={tigersScore} />
        </div>
        <BottomRow 
        quarter={quarter} 
        quarterChange={quarterChange}
        down={down}
        changeDown={changeDown}
        />
      </section>
    </div>
  );
}

export default App;

