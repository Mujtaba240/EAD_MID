import React from "react";
import { useState } from "react";
import UserParticipation from './UserParticipation';
function PollDisplay(){
        const [votesJS, setVotesJS] = useState(0)
        const [votesPy, setVotesPy] = useState(0)
        const [votesJava, setVotesJava] = useState(0)
        const [votesC, setVotesC] = useState(0)
        const [start, setStart] = useState(false)
        const [newParticipation, setNewParticipation] = useState(false)
        
    let sampleData = 
        {
        "question": "What is your favorite programming language?",
        "choices": [
          { "id": 1, "label": "JavaScript", "votes": 0 },
      
          { "id": 2, "label": "Python", "votes": 0 },
      
          { "id": 3, "label": "Java", "votes": 0 },
      
          { "id": 4, "label": "C#", "votes": 0 }
        ]
    }
    let array = [votesJS,votesPy, votesJava, votesC]
    let arrayOFChoices = [...sampleData.choices]
    const startMethod = ()=>{
        setStart(true);
    }
    function hideCom(){
        setStart(false);
    }
    function JavaScript(){
        setVotesJS(votesJS+1)
    }
    function Python(){
        setVotesPy(votesPy+1)
    }
    function Java(){
        setVotesJava(votesJava+1)
    }
    function C(){
        setVotesC(votesC+1) 
    }

return (
    <>
    PollDisplay Component
    <br/>
            <h3>
                    {sampleData.question}
            </h3>
            <div>
                {arrayOFChoices.map((item, index)=>{
                    return <div>
                            {/* <li>{item.id}</li> */}
                            <li>{item.label}  -- Number of Votes {array[index]}</li>
                    </div>
                })}
            </div>
             <button onClick={startMethod}>Lets Start Voting</button>

            {start && <UserParticipation 
            callback={hideCom}
            JavaScript={JavaScript}
            Java={Java}
            Python={Python}
            C={C}
            /> }

           
    </>
)

}

export default PollDisplay;