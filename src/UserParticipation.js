import React from "react";
import PollDisplay from "./PollDisplay";
import { useState } from "react";
import AnotherParticipant from "./AnotherParticipant";
import ThankyouMessage from "./ThankyouMessage";

function UserParticipation({callback, JavaScript, Java, Python, C}) {

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
function JavaScript2()
{
    JavaScript()
}

function Java2()
{
    Java()
}
function Python2()
{
    Python()
}
function C2()
{
    C()
}

    return (<>
    <h3>
    UserParticipation
    
    </h3> 
        
        <button type="button" onClick={JavaScript2}>JavaScript</button>
        <button type="button" onClick={Python2}>Python</button>
        <button type="button" onClick={Java2}>Java</button>
        <button type="button" onClick={C2}>C#</button>
         {/* <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>
        <input type="radio" name='choice'>JavaScript</input>*/}
    <br/>
    <button onClick={submitResponse}>Submit</button> 
    {feedback && !showOtherPar && <AnotherParticipant />}

    {feedback && <ThankyouMessage />}
    </>)
}
export default UserParticipation;