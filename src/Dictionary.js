import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [query, setQuery] = useState("");

    function updateQuery(event) {
      setQuery(event.target.value);      
    }

    function search(event){
        event.preventDefault();             
        alert(query);  
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" autofocus={true} placeholder="type a word" onChange={updateQuery}/>
                <input type="submit" value="go"/>
            </form>
        </div>
    )
}