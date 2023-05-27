import React from "react";
import PollDisplay from "./PollDisplay";
import { useState } from "react";
import AnotherParticipant from "./AnotherParticipant";

function UserParticipation({callback}) {

    const [message, setMessage] = useState('');
    const [feedback, setFeedback] = useState(false);
    const [showOtherPar, setShowOtherPar] = useState(true);

    function submitResponse()
    {
            setMessage("Thankyou for Voting");
            setFeedback(true);
            callback()
            setShowOtherPar(true);
}

    return (<>
    <h3>
    UserParticipation
    
    </h3> 
        
        <button type="button">JavaScript</button>
        <button type="button">Python</button>
        <button type="button">Java</button>
        <button type="button">C#</button>
         {/* <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>*/}
    <br/>
    <button onClick={submitResponse}>Submit</button> 
    {feedback && !showOtherPar && <AnotherParticipant />}
    </>)
}
export default UserParticipation;