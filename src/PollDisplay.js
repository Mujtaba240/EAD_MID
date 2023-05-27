import React from "react";

function PollDisplay(){

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
                            <button>{item.votes}</button>
                    </div>
                })}
            </div>
           
    </>
)

}

export default PollDisplay;