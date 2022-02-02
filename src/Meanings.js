import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
    console.log(props.meanings)

    return (<div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        {/* mapping through all the definitions(some words have more than 1)*/}
        {props.meanings.definitions.map(function(definition, index){
            return(
                <div key={index}>
                <p>
                    <strong>Definition: </strong>
                    {definition.definition}
                <br />
                <strong>Examples: </strong>
                <em>"{definition.example}"</em>
                <br />
                <div>
                <strong>Synonyms: </strong> 
                {definition.synonyms}</div>
                s
                </p>
                </div>
            )
        })}
        </div>
    );
}