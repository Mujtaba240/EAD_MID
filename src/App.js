import React from "react";
import PollDisplay from "./PollDisplay"
import Timer from './TaskB/Timer'
import { useState } from "react";
import ThankyouMessage from "./ThankyouMessage";
function App() {  
  const [isParticipation, setIsParticipation] = useState(false);

  function Participate(){
      setIsParticipation(true);
  }
  return (
    <div className='App'>
    <h1>Task-A:  PollApp</h1>
    <button onClick={Participate}>Click to participate</button>
    <br/>
     {isParticipation && <PollDisplay/>}
    {/* <UserParticipation /> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <Timer />
    </div>
  );
}

export default App;
