import React, { useEffect, useState } from "react";

function Watch (){

    const [seconds, setSeconds]=useState(0)
    
    useEffect(() =>{
      const interval= setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
         }, 1000); 
        
        return ()=> clearInterval(interval) 
        
    }, [])


   const hours= Math.floor((seconds/ 3600) % 24)
   const minutes=Math.floor((seconds % 3600) /60)
   const displaySeconds= seconds % 60


    return(
        <div>
           <h2>
            <span>{hours.toString().padStart(2,"0")}</span>
            : <span>{minutes.toString().padStart(2,"0")}</span>
            : <span>{displaySeconds.toString().padStart(2,"0")}</span>
            
           </h2>
        </div>
    )
}

export default Watch