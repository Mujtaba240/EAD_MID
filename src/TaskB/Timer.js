import { render } from "@testing-library/react";
import {useState, useEffect } from "react";

function Timer(){
const [message , setMessage] = useState(" Timer CountDown :")
const [count, setCount]= useState(10);
var timerID;
useEffect(()=>{
   timerID =  setInterval(()=>{
        setCount(count-1);
    }, 1000)
})
useEffect(()=>{
    if(count<1)
    {
        clearInterval(timerID)
        setMessage("Time's up!")
    }
})
return(<>
        <h3>
        Task-B Here!
        {message} {count>0 ? count : ""}
    </h3>
</>)
}

export default Timer;
