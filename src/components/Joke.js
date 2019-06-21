import React from 'react';

function Joke(props) { 
    return (
        <div>
            <h4 style={{ display: props.question ? "block" : "none" }} > Question : {props.question}</h4>
            <h6>Answer: {props.punchline}</h6>
        </div>
    )
}

export default Joke;