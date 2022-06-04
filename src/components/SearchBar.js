
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const SearchBar = () => {
  let navigate = useNavigate()
  let { movieQuery } = useParams();
  const posterURL = "https://image.tmdb.org/t/p/w185"
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);


  const getMovies = async (movie) => {
    const options = {
      method: 'GET',
      url: `https://search-movie-posters.herokuapp.com//search`,
      params: { movie: movie }
    }
    axios.request(options).then((response) => {

      console.log(response.data);
      setMovies(response.data);


    }).catch((error) => {
      console.error(error);
    })
  }
  const handleSubmit = (e) => {
    // e.preventDefault();
    const movie = title;
    navigate("/" + movie);
  }

  useEffect(() => {
    getMovies(movieQuery)
  }, []);


  return (

    <div id="header">
      <div className="inputting">
        <a className="headers" id="home-link" href="/">Search Movie Posters</a>
        <p className="headers" id="slogan">A simple way to get your high quality movie posters</p>

        <form id='form' onSubmit={handleSubmit}>
          <input id="search-box" type="text" placeholder='Search for any movie' name="movie" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button id='search-btn'>Search</button>
        </form>
        {movies &&
          <div className='container'>
            {movies.map((movie, i) => (
              <div key={i} className='box'>
                <a href={`posters/${movie.id}`}><img className='grid-image' alt={movie.title} src={posterURL + movie.poster_path} /></a>
                <a href={`posters/${movie.id}`} className='movie-poster-link'>{`${movie.title} (${movie.release_date})`}</a>

              </div>
            ))}
          </div>
        }
      </div>
      <div id="footer">All posters provided by <a href="https://www.themoviedb.org/">The Movie Database</a></div>
    </div>
  )
}

export default SearchBar