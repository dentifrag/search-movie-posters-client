import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useSearchParams} from 'react-router-dom';

const SearchBar = () => {
  const posterURL = "https://image.tmdb.org/t/p/w185"
  const [title, setTitle] = useSearchParams();
  const [movies, setMovies] = useState([]);


  const getMovies = async (movie) => {
    const options = {
      method: 'GET',
      url: `https://search-movie-posters.herokuapp.com/search`,
      params: { movie: movie }
    }
    await axios.request(options).then((response) => {
      console.log(response.data);
      setMovies(response.data);


    }).catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    getMovies(title.get("movie"))
  }, []);


  return (
      <div>
        {movies &&
          <div className='container'>
            {movies.map((movie, i) => movie.poster_path && (
              <div key={i} className='box'>
                <a href={`posters/${movie.id}`}><img className='grid-image' alt={movie.title} src={posterURL + movie.poster_path} /></a>
                <a href={`posters/${movie.id}`} className='movie-poster-link'>{`${movie.title} (${movie.release_date})`}</a>

              </div>
            ))}
          </div>
        }
      <div id="footer">All posters provided by <a href="https://www.themoviedb.org/">The Movie Database</a></div>
    </div>
  )
}

export default SearchBar