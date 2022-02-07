import React from "react";
import "./Phonetics.css";


export default function Phonetics(props) {
    console.log(props.phonetic);
    return(
        <div className="Phonetics">
            <span className="phoneticText">/'{props.phonetic.text}/ </span>
             {/* might include audio player later*/}
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer" className="phoneticAudio">♪</a>
        </div>
    )
}