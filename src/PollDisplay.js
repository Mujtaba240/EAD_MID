import React from "react";
import { useState } from "react";

function PollDisplay(){
        const [votesJS, setVotesJS] = useState(0)
        const [votesPy, setVotesPy] = useState(0)
        const [votesJava, setVotesJava] = useState(0)
        const [votesC, setVotesC] = useState(0)
        
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

    let arrayOFChoices = [...sampleData.choices]

    const countVotes = (obj)=>{
            setVotesJS(votesJS+1)
    }

return (
    <>
    PollDisplay Component
    <br/>
            <h3>
                    {sampleData.question}
            </h3>
            <div>
                {arrayOFChoices.map((item)=>{
                    return <div>
                            <li>{item.id}</li>
                            <li>{item.label}</li>
                            <li>Number of Votes {votesJS}</li>
                            <button onClick={countVotes} id={item.id} >Give Your Vote</button>
                    </div>
                })}

            </div>
           
    </>
)

}

export default PollDisplay;