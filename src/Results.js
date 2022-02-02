import React from "react";
import Meanings from "./Meanings.js";
import Phonetics from "./Phonetics.js";
import "./Results.css";

export default function Results(props) {
    console.log(props.results);
    if(props.results) { 
        return(
        <div className="Results">
            <h2>
                <span className="word">{props.results.word}</span>
                {/* more than one phonetic entry, let's loop through them: */}
                <span className="phonetic">
                    {props.results.phonetics.map(function(phonetic, index){
                        return(<div key={index}>
                            <Phonetics phonetic={phonetic} />
                        </div>                            
                        );
                    })}
                </span>
            </h2>  
               
      {props.results.meanings.map(function(meanings, index){
          return (<div key={index}>
            <Meanings meanings={meanings}/>
          </div>);         
      })}
        </div>
    );
} else {
        return null
    }
}