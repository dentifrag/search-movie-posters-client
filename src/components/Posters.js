import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Posters = () => {
    const posterURL = "https://image.tmdb.org/t/p/w185"
    let {movieid} = useParams();
    const [moviePosters, setMoviePosters] = useState();


    useEffect(() => {
        const getPosters = async () => {
            const options = {
                method: 'GET',
                url: `https://search-movie-posters.herokuapp.com/poster?movieid=${movieid}`,

            }
            axios.request(options).then((response) => {

                console.log(response.data);
                setMoviePosters(response.data);

            }).catch((error) => {
                console.error(error);
            })
        }
        getPosters();
    }, []);

    return (
        <div>
            {moviePosters &&
                <div className="container">
                    {moviePosters.map((poster, i) => (
                        <div key={i} className="box">
                            <a className="movie-poster-link" href={`/poster${poster.poster_path}`}><img
                                className="grid-image" alt={poster.poster_path}
                                src={posterURL + poster.poster_path}></img></a>
                        </div>
                    ))}</div>
            }
        </div>
    )
}

export default Posters