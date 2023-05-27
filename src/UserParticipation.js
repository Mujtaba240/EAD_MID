import React from "react";
import PollDisplay from "./PollDisplay";
import { useState } from "react";
function UserParticipation() {

    const [isParticipation, setIsParticipation] = useState(false);

    function Participate(){
        setIsParticipation(true);
    }
    return (<>
    <h3>
    UserParticipation
    </h3>
    <br/>
    <button onClick={Participate}>Click to participate</button>
     {isParticipation && <PollDisplay/>}   
    </>)
}
export default UserParticipation;