import React from "react";
import PollDisplay from "./PollDisplay";
import { useState } from "react";
function UserParticipation() {

    function submitResponse()
    {
        
    }
    return (<>
    <h3>
    UserParticipation
    
    </h3> 
        <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>
        {/* <input type="" name="" value="">> */}
        <input type="radio" name='choice'>JavaScript</input>
        <button onClick={submitResponse}>Submit</button>
  
    </>)
}
export default UserParticipation;