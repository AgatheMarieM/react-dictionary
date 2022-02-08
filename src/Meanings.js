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
                 <div className="row">
                     <div className="col-2">
                      <span className="definitionTitle">Definition</span>   
                     </div>
                     <div className="col-10">
                     <span className="definitionText">{definition.definition}</span>   
                     <br />
                     <span className="examplesText"><em>{definition.example}</em></span>    
                     </div>                  
                 </div>                                       
                    <Synonyms synonyms={definition.synonyms} />                
                </div>                
            )
        })}
        </div>
    );
}