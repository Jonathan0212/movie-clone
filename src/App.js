import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg';

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
        
          <div className="search">
            <input 
                placeholder="Search for movies"
                value='super'
                onChange={() => {}}
            />
            <img 
                src={SearchIcon}
                alt='search'
                onClick={() => {}}
            />
          </div>

          <div className="container">

          </div>
        </div>
        
    );
}

export default App;