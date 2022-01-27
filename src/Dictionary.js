import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary() {
    let [query, setQuery] = useState("");

    function handleResponse(response) {
        console.log(response.data[0])
    }

    function updateQuery(event) {
      setQuery(event.target.value);      
    }

    function search(event){
        event.preventDefault();          
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
        axios.get(apiUrl).then(handleResponse);
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