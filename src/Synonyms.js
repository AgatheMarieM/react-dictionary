import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {  
    if (props.synonyms) {
      return(
          <div className="Synonyms">
              <span className="synonymsTitle">Synonyms</span>
              <ul className="Synonyms">
              {/* mapping through all synonyms to split the synonyms array*/}
       {props.synonyms.map(function(synonym, index) {
           return(
               <li key={index}><span>{synonym}</span></li>                   
           )
       })}
             </ul>
        </div>
          );  
    } else {
        return null;
    }        
}