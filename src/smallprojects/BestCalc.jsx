import React, { useState } from 'react';
import "./bestcalc.css";
import { useSearchParams } from 'react-router-dom';

function Bestcalc() {
 const[input, setInput]=useState([])

 const getItems=(value)=>{
   setInput(prevIndex => [...prevIndex, value])
 }
 const removeAllItems=(value)=>{
  setInput([])
 }
 const deleteItems = (index) => {
  setInput(prevIndex => prevIndex.filter((_, i) => i !== index));
};
const getCalresult=()=>{
 try {
  // const result= eval(input.join(""));
  setInput([eval(input.join("")).toString()])
 } catch (error) {
   alert("error");
 }

}
  return (
    <div className='container'>
      <div className="inputs">
         <input type="text" value={input.join("")} disabled placeholder='0' />
      </div>
       <div className="buttons">
        <button onClick={removeAllItems}>C</button>
        <button onClick={() => deleteItems(input.length - 1)}>Del</button>
        {["/", "%"].map(btn =>(<button key={btn} onClick={() => getItems(btn)}>{btn} </button>))}
        {[9, 8, 7, "*"].map(btn =>(<button key={btn} onClick={() => getItems(btn)}>{btn} </button>))}
        {[6, 5, 4, "+" ].map(btn =>(<button key={btn} onClick={() => getItems(btn)}>{btn} </button>))}
        {[3, 2, 1, "-", ".", 0].map(btn =>(<button key={btn} onClick={() => getItems(btn)}>{btn} </button>))}
        <button onClick={getCalresult}>=</button>
       </div>
    </div>
  );
}

export default Bestcalc;