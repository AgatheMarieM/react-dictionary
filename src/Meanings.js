import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
        return (<div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        {/* mapping through all the definitions(some words have more than 1)*/}
        {props.meanings.definitions.map(function(definition, index){
            return(
                <div key={index}> 
                <div className="definitions">             
                    <span className="definitionTitle">Definition</span>
                    <span className="definitionText">{definition.definition}</span>                    
                </div>  
                <div className="examples"> 
                
                <span className="examplesText"><em>"{definition.example}"</em></span>
                </div>   
                <Synonyms synonyms={definition.synonyms} />                
                </div>
            )
        })}
        </div>
    );
}