import React from "react";
import PollDisplay from "./PollDisplay"
import UserParticipation from "./UserParticipation";
function App() {  
  return (
    <div className='App'>
    <h1>PollApp</h1>
    <PollDisplay />
    <UserParticipation />
    
    </div>
  );
}

export default App;
