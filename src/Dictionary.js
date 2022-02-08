import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import BeatLoader from "react-spinners/ClipLoader";



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
                    <input type="search" autoFocus={true} placeholder="type a word" onChange={updateQuery} defaultValue={props.defaultQuery}/>
                </div>
                <div className="col-3">
                    <input type="submit" value="go" />
                </div>
                </div>               
            </form>
             <Results results={results}/>  
        </div>
    )} else {
        load();
        return (<div className="loader">
           Fetching...
        <BeatLoader color="#0962ea" loading={true} css="" size={30} /> 
        </div>);      
    }   
}
