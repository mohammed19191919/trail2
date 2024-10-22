import React, { useState, useEffect } from 'react';
import "./quize.css";
function Timenew() {
  const[time, setTime]=useState(new Date().toLocaleTimeString());
  const[date, setDate]=useState(new Date().toLocaleDateString())

   const updateTime=()=>{
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString())
   }
   useEffect (() =>{
    const intervalId=setInterval(updateTime, 1000);
    return ()=> {
        clearInterval(intervalId)
    };
   }, [])
    
  return (
    <div className='time-styling'>
      <h1 > ዛሬ ቀኑ፡ ---<span className='date'> {date}</span>  <br /> ሰአቱ ደግሞ፡ --  <span className='time'>{time}</span> ነው፡፡
             
      </h1>
      <h1>
      {parseInt(time.split(":")[0]) >=12 ? "መልካም አዳር": "መልካም ዉሎ"}
      </h1>
    </div>
  );
}

export default Timenew;