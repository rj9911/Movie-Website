import {useEffect , useState} from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg'

//de56f31e
const API_URL = 'http://www.omdbapi.com?apikey=de56f31e';

const movie1 = 
  {
    "Title": "Spiderman",
    "Year": "1990",
    "imdbID": "tt0100669",
    "Type": "movie",
    "Poster": "N/A"
};


const App = () => {
const [movies , setMovies] = useState([]);
const [searchTerm , setsearchTerm] = useState('');
// Empty Search String is passed to hv search initially empty.

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`) // To fetch the data from the API
  const data = await response.json(); 
  setMovies(data.Search);
}  

useEffect(() => {
      // SearchMovies Function Called here
searchMovies('Spiderman')
  }, []);

return (
  <div className='app'>
    <h1>Hotstar</h1>

      <div className='search'>
        <input placeholder='Search for movies' 
        value= {searchTerm}
        // now its becomes Dynamic

        onChange={(e) => setsearchTerm(e.target.value)}/>
        {/* This is called the event i.e onchange event  */}
        <img src={SearchIcon} alt="Search"
        onClick={() => {
          // Calling the API here.
          searchMovies(searchTerm)
          // dynamically passed the searchTerm,You will see the movie that you Searched for. State is dynamically changed when you search in the search Box.
        }}
        />
      </div>
      {
        movies?.length>0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie = {movie}/>
// We dynamically looping over our movies array which is fetch from an API and we taking each individual movie, and dynamcally passes each movie as props in our movie cart.   
            ))}
          {/* This is Important */}
         </div>    
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
        }
      
    </div>
  );
}



export default App;
