import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(props) {
    let [query, setQuery] = useState(props.defaultQuery);
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {        
    setResults(response.data[0]);
    }

    function updateQuery(event) {
      setQuery(event.target.value);      
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();       
        search();
    }

    function load() {
        setLoaded(true);
        search();
    }

if(loaded) { 
    return (
        <div className="Dictionary">                                             
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                    <input type="search" autoFocus={true} placeholder="type a word" onChange={updateQuery} className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="go" className="btn btn-light w-100 go-button"/>
                </div>
                </div>               
            </form>
             <Results results={results}/>
        </div>
    )} else {
        load();
        return "loading";        
    }   
}

{/* add loader spinner later? */}