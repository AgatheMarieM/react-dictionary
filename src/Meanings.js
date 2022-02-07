import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
        return (
        <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>        
        {props.meanings.definitions.map(function(definition, index){
            return(
                <div key={index}> 
                <span className="definitions">             
                    <span className="definitionTitle">Definition</span>
                    <span className="definitionText">{definition.definition}</span>    
                </span>           
                    <span className="examplesText"><em>{definition.example}</em></span>             
                    <Synonyms synonyms={definition.synonyms} />                
                </div>                
            )
        })}
        </div>
    );
}