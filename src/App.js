import {useEffect} from "react";
import './App.css';
// import './search.svg';

// 723298ef
const API_URL = 'http://www.omdbapi.com?apikey=723298ef'

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Star Wars')
    }, []);
    return (
        <div className="app">
            <h1> Movielandia </h1>
        </div>
    );
}

export default App;