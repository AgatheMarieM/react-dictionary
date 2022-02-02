import React from "react";

export default function Synonyms(props) {  
        if (props.synonyms) {
          return(
              <ul className="Synonyms">
                  {/* mapping through all synonyms to split the synonyms array*/}
           {props.synonyms.map(function(synonym, index) {
               return(
                   <li key={index}><span>{synonym}</span></li>                   
               )
           })}
        </ul>);  
        } else {
            return null;
        }        
}