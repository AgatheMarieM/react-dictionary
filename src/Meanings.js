import React from "react";

export default function Meanings(props) {
    console.log(props.meanings)
    return (<div>
        <h3>{props.meanings.partOfSpeech}</h3>
        <p>
            {props.meanings.definitions[0].definition}
        </p> 
        <p>
            <em>"{props.meanings.definitions[0].example}"</em>
        </p>
    </div>
    )
}