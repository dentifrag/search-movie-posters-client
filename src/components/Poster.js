import { useParams } from "react-router-dom"; 

const Poster = () => {
    const moviePosterPathOriginal = "https://image.tmdb.org/t/p/original/"
    let { poster_path } = useParams();

    return (
        <div>
            <div className="container">
                <img className="container"id="main-poster" alt={poster_path}src={`${moviePosterPathOriginal}${poster_path}`}></img>
            </div>
            
        </div>
    )
}

export default Poster