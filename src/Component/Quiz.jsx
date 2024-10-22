import React, { useState } from 'react';
import "./quize.css";

const data = [
  { question: "Who sang the title song for the latest Bond film, No Time to Die?",
    options: ["Adele", "Sam Smith", "Billie Eilish"],
    correctanswer: 2
  },
  { question: "Which flies a green, white, and orange (in that order) tricolor flag?", 
    options: ["Ireland", "Ivory Coast", "Italy"],
    correctanswer: 0
  },
  { question: "What company makes the Xperia model of smartphone?",
    options: ["Samsung", "Sony", "Nokia"],
    correctanswer: 1
  },
  { question: "Which city is home to the Brandenburg Gate?",
    options: ["Vienna", "Zurich", "Berlin"],
    correctanswer: 2
  },
  { question: "Which of the following is NOT a fruit?",
    options: ["Rhubarb", "Tomatoes", "Avocados"],
    correctanswer: 0
  },
  { question: "Where was the first example of paper money used?",
    options: ["China", "Turkey", "Greece"],
    correctanswer: 0
  },
  { question: "Who is generally considered the inventor of the motor car?",
    options: ["Henry Ford", "Karl Benz", "Henry M. Leland"],
    correctanswer: 1
  },
  { question: "If you were looking at Iguazu Falls, on what continent would you be?",
    options: ["Asia", "Africa", "South America"],
    correctanswer: 2
  },
  { question: "What number was the Apollo mission that successfully put a man on the moon for the first time in human history?", 
    options: ["Apollo 11", "Apollo 12", "Apollo 13"],
    correctanswer: 0
  },
  { question: "Which of the following languages has the longest alphabet?",
    options: ["Greek", "Russian", "Arabic"],
    correctanswer: 1
  },
  { question: "How was the exam?",
    options: ["simple", "optimium", "Difficult"],
    correctanswer: [1, 2,3]
  },
  
];

function Quiz() {
  const[orderofQuestions, setorderofQuestions]=useState(0)
  const[answer, setanswer]=useState(null)
  const [score, setScore]=useState(0)
  const [finshed, setFinshed]=useState(false)
      
  const questions=data[orderofQuestions]

  const handleScore=(orderIndex)=>{
    setanswer(orderIndex)
    if (orderIndex === questions.correctanswer) {
        setScore(prevScore => prevScore + 1)
        setFinshed(false)
       
    }
  }
  const nextQuestion=()=>{
    if (answer !== null) {
      if (orderofQuestions < data.length - 1) {
        setorderofQuestions(prevOrderofQuestions => prevOrderofQuestions + 1)
        setanswer(null)
      } else{
        setFinshed(true)
         }
      }

    }
  const controlFinshed =()=>{

  }
  return (
    <div>
        <p> Multiple Choice Questions </p>
         <div>
         </div>{finshed ? (
         <p>
          <h2 style={{display: orderofQuestions === data.length -1? "block" : "none"}}> Your total score is: {score} out of {data.length} </h2>
          Thank you for particapating, never try to retake the Exam.
          
         </p> 
         
         ):(
          
         <div>
      <p> {orderofQuestions + 1}, {questions.question} </p>
        <ul>
          
             {questions.options.map((listofOptions, orderIndex) =>(<li key={orderIndex}> <input type="radio" value={orderIndex} name='quiz' checked={answer === questions.correctanswer} onChange={()=> handleScore(orderIndex)}/> {listofOptions}</li>))}
          </ul>  
          <button onClick={nextQuestion}> {orderofQuestions === data.length -1 ? "Submit": "Next"}</button>    
         
         </div>
         )}

    </div>
  );
}

export default Quiz;