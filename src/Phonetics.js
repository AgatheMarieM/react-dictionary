import React from "react";


export default function Phonetics(props) {
    return(
        <div className="Phonetics">
            {props.phonetic.text}
        </div>
    )
}