import React, { useState, useEffect } from "react";
import "./some.css";

function Some() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting && count < 100) {
      interval = setInterval(() => {
        setCount(prevCount => (prevCount + 1) % 101);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [count, isCounting]);

  const startCounting = () => {
    setIsCounting(true);
  };

  const endCounting = () => {
    setIsCounting(false); 
  };

  return (
    <div>
      <div className="container">
      {count ===100 ? (<div > <h1 className="wellcome">Wellcome</h1> <br /> <h2>You fonished your submission. <br /> Thank you</h2>  </div>): (        <div> 
        <h2>Processing... ({count}%)</h2>
        <div className="subcontainer"><div className="secondsub" style={{ width: `${count}%` }}></div></div>
        <div className="percentmeto">
          <p>0%</p>
          <p>100%</p>
        </div>
        </div>)}
      </div>
      <button onClick={startCounting}>Start</button>
      <button onClick={endCounting}>End</button>
    </div>
  );
}

export default Some;