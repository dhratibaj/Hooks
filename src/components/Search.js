import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    // console.log(results);
    //useEffect Hook
    useEffect(() => {
        const searchAPI = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };

        if(term && !results.length){
            searchAPI();
        }
        else{
            const timeoutId = setTimeout(() => {
                // Helper Function
                if (term)
                    searchAPI();
            }, 1000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
        

    }, [term]);

    const renderdResult = results.map((result) => {
        return (
            <div key={result.pageid} className="ui item">
                <div className="right floated content">
                    <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                    </a>
                </div>
                <div className="ui content">
                    <div className="ui header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderdResult}</div>
        </div>
    );
}

export default Search;