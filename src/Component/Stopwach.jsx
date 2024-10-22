import React, { useEffect, useState } from 'react'

function Stopwach() {
    const [seconds, setSeconds]=useState(0);
    const [isActive, setActiveValue] =useState(false);  
    let intervalId= null;

    useEffect(()=>{
      if(isActive){
       intervalId= setInterval(() => {
         setSeconds(prevSeconds => prevSeconds + 1)
       }, 1000);
}
 else {
    clearInterval(intervalId)
 }
 return ()=>{
  clearInterval(intervalId)
 }
}, [isActive, seconds])

  
const startTiming=()=>{
  setActiveValue(false)
}
const resetCount=()=>{
  setSeconds(0)
  setActiveValue(false)
}
const hours= Math.floor(seconds / 3600);
const minutes= Math.floor((seconds % 3600) / 60);
const displaySoconds = seconds % 60;
  return (
    <div>
      <h2>
   <span className='hour'>{hours.toString().padStart(2, "0")}</span> : 
   <span className='minutes'>{minutes.toString().padStart(2, "0")}</span> : 
   <span className='seconds'>{displaySoconds.toString().padStart(2, "0")}</span>
      </h2>
    <button onClick={startTiming}>Start</button>
    <button onClick={() => setActiveValue(true)}>Stop</button>
    <button onClick={resetCount}>Reset</button>

    </div>
  )
}

export default Stopwach