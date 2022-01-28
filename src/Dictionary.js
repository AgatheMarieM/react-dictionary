import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
    let [query, setQuery] = useState("");
    let [results, setResults] = useState("");

    function handleResponse(response) {        
    setResults(response.data[0]);
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
                <div className="row">
                    <div className="col-9">
                    <input type="search" autoFocus={true} placeholder="type a word" onChange={updateQuery} className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="go" className="btn btn-dark w-100 go-button"/>
                </div>
                </div>               
            </form>
             <Results results={results}/>
        </div>
    )
}