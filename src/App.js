import React from "react";
import PollDisplay from "./PollDisplay"
import Timer from './TaskB/Timer'
import { useState } from "react";
function App() {  
  const [isParticipation, setIsParticipation] = useState(false);

  function Participate(){
      setIsParticipation(true);
  }
  return (
    <div className='App'>
    <h1>PollApp</h1>
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
