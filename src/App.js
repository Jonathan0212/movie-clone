import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// 723298ef
const API_URL = 'http://www.omdbapi.com?apikey=723298ef'


const movie1 = {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);

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

          {
              movies?.length > 0
              ? (  
                <div className="container">
                    <MovieCard movie1={movie1}/>
                 </div>
              ) : (
                  <div className="empty">
                    <h2> No Movies Found </h2>  
                  </div>
              )
          }

         
    </div>
    );
};

export default App;