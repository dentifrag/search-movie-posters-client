import {useParams} from "react-router-dom";
import {saveAs} from 'file-saver'

const Poster = () => {
    const moviePosterPathOriginal = "https://image.tmdb.org/t/p/original/"
    let {poster_path} = useParams();
    const downloadImage = () => {
        saveAs(`${moviePosterPathOriginal}${poster_path}`, "poster.jpg")
    }
    return (
        <div>
            <div className="poster">
                <img id="main-poster" alt={poster_path} src={`${moviePosterPathOriginal}${poster_path}`}></img>
                <button id="search-btn" onClick={downloadImage}>Download</button>
            </div>
        </div>
    )
}

export default Poster