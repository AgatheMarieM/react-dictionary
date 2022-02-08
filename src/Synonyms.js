import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <div className="row">
          <div className="col-2">
           <span className="synonymsTitle">Synonyms</span> 
          </div>
          <div className="col-10">
           <ul className="Synonyms">
             {/* mapping through all synonyms to split the synonyms array*/}
             {props.synonyms.map(function (synonym, index) {
               if (synonym) {
                 return (
                   <li key={index}>
                     <span>{synonym}</span>
                   </li>
                 );
               } else {
                 return null;
               }
             })}
           </ul>
          </div>       
        </div>
      </div>
    );
  } else {
    return null;
  }
}