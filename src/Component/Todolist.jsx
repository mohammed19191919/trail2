import React, { useState } from 'react'

function Todolist() {
     const [input, setInput]=useState("")
     const [lists, setlists]=useState([])
     const [intaiteUpdate, setinitations]=useState(null)
     const [completion, setCompletion] =useState([])

     const getValue =(e)=>{
        if(intaiteUpdate !== null){
            
        }
        const newValue =e.target.value;
         setInput(newValue)
     }
     const listofTasks =(index)=>{
         if (input === ""){
            alert("please write your list of tasks")
         } else{
            if (intaiteUpdate !== null) {
                const newlists = [...lists]
                newlists[intaiteUpdate]=input
                setInput(newlists)
                setlists(newlists)
                setinitations(null)   
            } else{
        const newlist= [...lists, input]
        setlists(newlist)
     }}
     setInput ("")
    };

     const deletItem=(index)=>{
        const newdelete= lists.filter((_,i)=> i !== index)
        setlists(newdelete);
     }

     const intiationupdate=(index)=>{
         setinitations(index)
         setInput(lists[index])
     }

    const  taskcompleted=(index)=>{
        const newcompletion=[...completion]
        newcompletion[index] = !newcompletion[index];
        setCompletion(newcompletion)
    }
  return (
    <div>
   <h2>Todolist App</h2>
        <input type="text" value={input} onChange={getValue}/>   
        <button onClick={(index)=> listofTasks(index)}> {intaiteUpdate !== null ? "Update": "Add"} </button> 
       <div>
        <ol>
            {lists.map((list, index)=>  (<li key={index} style={{backgroundColor: completion[index] ? "green" : "inherit", textDecoration: completion[index] ? "line-through" : "none"}}> {list}

           <button onClick={()=> deletItem(index)}>Delete</button>

          <button onClick={()=> intiationupdate(index)}>Update</button>

          <button onClick={()=> taskcompleted(index)} className='completed'>Completed</button>
            </li>))}
        </ol>
       </div>
    </div>
  )
}

export default Todolist